import axios from "axios";
import { authService } from "../services/authService";

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
        const tokens = (await axios.post("http://localhost:9000/api/auth/refresh", {refresh:localStorage.getItem("RefreshToken")})).data;
        localStorage.setItem("AccessToken", tokens.access);
        localStorage.setItem("RefreshToken", tokens.refresh);

        return api.request(originalRequest);
      } catch (e) {
        console.log("НЕ авторизован");
        authService.inputs.signOutUser();
      }
    }
    throw error;
  }
);
