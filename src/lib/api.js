import api from "./axios";

export const authApi = {
  login: async (email, password) => {
    const { data } = await api.post("/api/user/login/", { email, password });
    return data;
  },

  refreshToken: async (refreshToken) => {
    const { data } = await api.post("/api/user/token/refresh/", {
      refresh: refreshToken,
    });
    return data;
  },
};

export const userApi = {
  getMe: async () => {
    const { data } = await api.get("/api/user/me/");
    return data;
  },
};

export const subscriptionsApi = {
  getPacks: async () => {
    const { data } = await api.get("/api/subscriptions/packs/");

    return data.results.map((pack) => ({
      id: pack.id,
      name: pack.title,
      description: pack.description,
      image: pack.image,
      price: `Preço: ${parseFloat(pack.price).toFixed(2)}€`,
      link: "/agendar-espaco",
    }));
  },

  subscribe: async (packId, paymentData) => {
    const { data } = await api.post(
      `/api/subscriptions/packs/${packId}/subscribe/`,
      paymentData
    );
    return data;
  },
};

export const loginUser = authApi.login;
export const fetchPacks = subscriptionsApi.getPacks;
