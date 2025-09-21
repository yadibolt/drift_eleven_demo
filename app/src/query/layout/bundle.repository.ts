import { apiService } from "../../services/api.service";
import type { IBundleJsonResponse } from "../../@interfaces/layout/bundle.interface";

export interface IBundleRepository {
  get: () => Promise<IBundleJsonResponse>;
}

export const bundleRepository: IBundleRepository = {
  get: async () => {
    const response = await apiService.get<IBundleJsonResponse>("/bundle");
    return response.data;
  },
};
