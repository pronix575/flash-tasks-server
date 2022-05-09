import axios from "axios";

export const api = axios.create({});

api.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "AccessToken"
  )}`;
  return config;
});

api.interceptors.response.use(
  (config: any) => {
    return config;
  },
  async (error: any) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get("http://localhost:9000/api/auth/refresh", {
          withCredentials: true,
        });
        localStorage.setItem("token", response.data.accessToken);
        return api.request(originalRequest);
      } catch (e) {
        console.log("НЕ авторизован");
      }
    }
    throw error;
  }
);
