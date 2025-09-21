import { useQuery } from "@tanstack/react-query";
import useUserStore from "../store/use-userStore.hook";
import { getTokenQuery } from "../../query/auth/token.query";
import { useEffect } from "react";

export const useEnsureToken = () => {
  const { getAccessToken, setAccessToken } = useUserStore();

  const currentToken = getAccessToken();
  console.log("Access Token:", currentToken);
  console.log("Token type:", typeof currentToken);
  console.log("Token truthy:", !!currentToken);
  console.log("Query enabled:", !currentToken);

  const query = useQuery({
    ...getTokenQuery(),
    enabled: !getAccessToken(),
    staleTime: Infinity,
  });

  useEffect(() => {
    if (query.data?.data.accessToken) {
      setAccessToken(query.data.data.accessToken);
    }
  }, [query.data, setAccessToken]);

  return query;
};
