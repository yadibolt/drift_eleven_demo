import { loginRepository, type ILoginPostData } from "./login.repository";

export const LOGIN_QUERY_KEY = "login";

export const getLoginQuery = (data: ILoginPostData) => ({
  queryKey: [LOGIN_QUERY_KEY],
  queryFn: () => loginRepository.login(data),
});
