import { logoutRepository } from "./logout.repository";
export const LOGOUT_QUERY_KEY = "logout";

export const getLoginQuery = () => ({
  queryKey: [LOGOUT_QUERY_KEY],
  queryFn: () => logoutRepository.logout(),
});
