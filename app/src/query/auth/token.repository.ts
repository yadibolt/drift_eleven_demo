import type { ITokenJsonResponse } from "../../@interfaces/token/token.interface";
import { apiAuthService } from "../../services/api.service";

export interface ITokenRepository {
  get: () => Promise<ITokenJsonResponse>;
}

export const tokenRepository: ITokenRepository = {
  get: async () => {
    const response = await apiAuthService.get<ITokenJsonResponse>("/token");
    return response.data;
  },
};
