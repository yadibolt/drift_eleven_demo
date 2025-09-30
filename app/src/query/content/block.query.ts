import { blockRepository } from "./block.repository";

export const BLOCK_QUERY_KEY = "block";

export const getBlockQuery = (id: string) => ({
  queryKey: [BLOCK_QUERY_KEY],
  queryFn: () => blockRepository.get(id),
});
