import { tokenRepository } from "./token.repository";

export const TOKEN_QUERY_KEY = "token";

export const getTokenQuery = () => ({
  queryKey: [TOKEN_QUERY_KEY],
  queryFn: () => tokenRepository.get(),
});
