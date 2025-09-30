import { apiService } from "../../services/api.service";
import type { IBlockJsonResponse } from "../../@interfaces/content/block.interface";

export interface IBlockRepository {
  get: (id: string) => Promise<IBlockJsonResponse>;
}

export const blockRepository: IBlockRepository = {
  get: async (id: string) => {
    const response = await apiService.get<IBlockJsonResponse>(`/block/${id}`);
    return response.data;
  },
};