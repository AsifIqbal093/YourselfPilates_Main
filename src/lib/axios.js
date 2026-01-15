import axios from "axios";
import { getAccessToken, clearAuthData, getRefreshToken, updateTokens } from "./auth";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://backend.yourselfpilates.pt";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 Unauthorized errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = getRefreshToken();
      if (refreshToken) {
        try {
          const { data } = await axios.post(`${API_BASE_URL}/api/user/token/refresh/`, {
            refresh: refreshToken,
          });

          updateTokens(data); // MERGE new tokens, don't overwrite user info
          const newToken = data.access;
          
          processQueue(null, newToken);
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return api(originalRequest);
        } catch (refreshError) {
          processQueue(refreshError, null);
          clearAuthData();
          // Fallback: If refresh fails, try once more WITHOUT the invalid token
          // This allows public endpoints (like fetchPacks) to still work
          delete originalRequest.headers.Authorization;
          return api(originalRequest);
        } finally {
          isRefreshing = false;
        }
      } else {
        clearAuthData();
        isRefreshing = false;
        // Fallback: Try without token
        delete originalRequest.headers.Authorization;
        return api(originalRequest);
      }
    }

    const message =
      error.response?.data?.detail ||
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "An unexpected error occurred";

    // Don't log 401s as they are often handled/expected
    if (error.response?.status !== 401) {
      console.warn(`API Error (${error.response?.status}): ${message}`);
    }

    return Promise.reject(new Error(message));
  }
);

export default api;
