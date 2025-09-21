import { bundleRepository } from "./bundle.repository";

export const BUNDLE_QUERY_KEY = "bundle";

export const getBundleQuery = () => ({
  queryKey: [BUNDLE_QUERY_KEY],
  queryFn: () => bundleRepository.get(),
});
