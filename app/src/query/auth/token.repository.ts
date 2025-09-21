import type { ITokenJsonResponse } from "../../@interfaces/token/token.interface";
import {
  apiAuthRefreshService,
  apiAuthService,
} from "../../services/api.service";

export interface ITokenRepository {
  // access token
  get: () => Promise<ITokenJsonResponse>;
  // reset token
  getRefresh: () => Promise<ITokenJsonResponse>;
}

export const tokenRepository: ITokenRepository = {
  // access token
  get: async () => {
    const response = await apiAuthService.get<ITokenJsonResponse>("/token");
    return response.data;
  },
  // refresh token
  getRefresh: async () => {
    const response = await apiAuthRefreshService.get<ITokenJsonResponse>(
      "/refresh-token",
    );
    return response.data;
  },
};
