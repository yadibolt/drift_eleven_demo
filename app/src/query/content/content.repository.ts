import { apiService } from "../../services/api.service";
import type { IContentJsonResponse } from "../../@interfaces/content/content.interface";

export interface IContentRepository {
  get: (url: string) => Promise<IContentJsonResponse>;
}

export const contentRepository: IContentRepository = {
  get: async (url: string) => {
    const response = await apiService.get<IContentJsonResponse>(`/content?destination=${url}`);
    return response.data;
  },
};
