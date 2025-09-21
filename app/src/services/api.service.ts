import axios, { type InternalAxiosRequestConfig } from "axios";
import { authService } from "./auth/auth.service";

export const apiAuthInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = authService.getAccessToken();

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
};

export const apiAuthRefreshInterceptor = (
  config: InternalAxiosRequestConfig,
) => {
  const token = authService.getRefreshToken();

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
};

export const apiService = axios.create({
  baseURL: "https://cms.drifteleven.local/api",
});

export const apiAuthService = axios.create({
  baseURL: "https://cms.drifteleven.local/auth",
});

export const apiAuthRefreshService = axios.create({
  baseURL: "https://cms.drifteleven.local/auth",
});

apiService.interceptors.request.use(apiAuthInterceptor);
apiAuthService.interceptors.request.use(apiAuthInterceptor);
apiAuthRefreshService.interceptors.request.use(apiAuthRefreshInterceptor);
