import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ILoginJsonResponse } from "../../@interfaces/auth/login.interface";
import { apiAuthService } from "../../services/api.service";
import { LOGIN_QUERY_KEY } from "./login.query";
import { authService } from "../../services/auth/auth.service";

export interface ILoginPostData {
  login: string;
  password: string;
}

export interface ILoginRepository {
  login: (data: ILoginPostData) => Promise<ILoginJsonResponse>;
}

export const loginRepository: ILoginRepository = {
  login: async (data: ILoginPostData) => {
    const response = await apiAuthService.post<ILoginJsonResponse>(
      "/login",
      data,
    );
    return response.data;
  },
};

export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { login: string; password: string }) => {
      return loginRepository.login(data);
    },
    onSuccess: async (data: ILoginJsonResponse) => {
      await queryClient.invalidateQueries({
        predicate: ({ queryKey }) => queryKey.includes(LOGIN_QUERY_KEY),
      });

      if (!data.error && data.data.accessToken && data.data.refreshToken) {
        authService.login(data.data.accessToken, data.data.refreshToken);
      }
    },
  });
};
