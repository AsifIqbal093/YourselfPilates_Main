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

  getOrders: async () => {
    const { data } = await api.get("/api/subscriptions/orders/");
    return data;
  },

  payOrder: async (orderId, paymentData) => {
    const { data } = await api.post(
      `/api/subscriptions/orders/${orderId}/pay/`,
      paymentData
    );
    return data;
  },

  deleteOrder: async (orderId) => {
    const { data } = await api.delete(`/api/subscriptions/orders/${orderId}/`);
    return data;
  },

  updateOrder: async (orderId, payload) => {
    const { data } = await api.patch(`/api/subscriptions/orders/${orderId}/`, payload);
    return data;
  },
};

export const loginUser = authApi.login;
export const fetchPacks = subscriptionsApi.getPacks;
export const fetchOrders = subscriptionsApi.getOrders;
export const deleteSubscriptionOrder = subscriptionsApi.deleteOrder;
export const updateSubscriptionOrder = subscriptionsApi.updateOrder;
