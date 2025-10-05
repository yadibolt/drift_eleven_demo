import axios, { type AxiosResponse, type InternalAxiosRequestConfig } from "axios";
import { authService } from "./auth/auth.service";
import type { AxiosError } from "axios";

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

const responseErrorInterceptor = (error: AxiosError) => {
  if (error.response?.status === 404) {
    // Throw a Response object that React Router will catch
    throw new Response("Not Found", { 
      status: 404, 
      statusText: "Not Found" 
    });
  }
  
  if (error.response?.status === 500) {
    throw new Response("Server Error", { 
      status: 500, 
      statusText: "Internal Server Error" 
    });
  }
  
  return Promise.reject(error);
};

export const apiService = axios.create({
  baseURL: "https://cms.blackcoffee.local/api",
});

export const apiAuthService = axios.create({
  baseURL: "https://cms.blackcoffee.local/auth",
});

export const apiAuthRefreshService = axios.create({
  baseURL: "https://cms.blackcoffee.local/auth",
});

apiService.interceptors.request.use(apiAuthInterceptor);
apiAuthService.interceptors.request.use(apiAuthInterceptor);
apiAuthRefreshService.interceptors.request.use(apiAuthRefreshInterceptor);

apiService.interceptors.response.use(
  (response: AxiosResponse) => response,
  responseErrorInterceptor
);

apiAuthService.interceptors.response.use(
  (response: AxiosResponse) => response,
  responseErrorInterceptor
);

apiAuthRefreshService.interceptors.response.use(
  (response: AxiosResponse) => response,
  responseErrorInterceptor
);
