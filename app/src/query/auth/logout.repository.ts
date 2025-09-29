import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ILogoutJsonResponse } from "../../@interfaces/auth/logout.interface";
import { apiAuthService } from "../../services/api.service";
import { LOGIN_QUERY_KEY } from "./login.query";
import { authService } from "../../services/auth/auth.service";

export interface ILogoutRepository {
  logout: () => Promise<ILogoutJsonResponse>;
}

export const logoutRepository: ILogoutRepository = {
  logout: async () => {
    const response = await apiAuthService.get<ILogoutJsonResponse>("/logout");
    return response.data;
  },
};

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      return logoutRepository.logout();
    },
    onSuccess: async (data: ILogoutJsonResponse) => {
      await queryClient.invalidateQueries({
        predicate: ({ queryKey }) => queryKey.includes(LOGIN_QUERY_KEY),
      });

      if (!data.error && data.data.accessToken) {
        authService.logout(data.data.accessToken);
      }
    },
  });
};
