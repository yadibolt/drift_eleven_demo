import { contentRepository } from "./content.repository";

export const CONTENT_QUERY_KEY = "content";

export const getContentQuery = (url: string) => ({
  queryKey: [CONTENT_QUERY_KEY],
  queryFn: () => contentRepository.get(url),
});
