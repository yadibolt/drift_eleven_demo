import { tokenRepository } from "./token.repository";

export const TOKEN_QUERY_KEY = "token";

export const getTokenQuery = () => ({
  queryKey: [TOKEN_QUERY_KEY],
  queryFn: () => tokenRepository.get(),
});

export const REFRESH_TOKEN_QUERY_KEY = "refreshToken";

export const getResetTokenQuery = () => ({
  queryKey: [REFRESH_TOKEN_QUERY_KEY],
  queryFn: () => tokenRepository.getRefresh(),
});
