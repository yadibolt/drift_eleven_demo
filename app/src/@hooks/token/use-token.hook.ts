import { useQuery } from "@tanstack/react-query";
import useUserStore from "../store/use-userStore.hook";
import { useEffect } from "react";
import {
  getRefreshTokenQuery,
  getTokenQuery,
} from "../../query/auth/token.query";

export const useToken = () => {
  const { getAccessToken, setAccessToken } = useUserStore();

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

export const useRefreshToken = () => {
  const { setAccessToken } = useUserStore();

  const query = useQuery({
    ...getRefreshTokenQuery(),
    enabled: false,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (query.data?.data.accessToken) {
      setAccessToken(query.data.data.accessToken);
    }
  }, [query.data, setAccessToken]);

  return query;
};

export const useAuthentication = () => {
  const { getAccessToken, getRefreshToken } = useUserStore();

  const tokenQuery = useToken();
  const refreshQuery = useRefreshToken();

  useEffect(() => {
    if (tokenQuery.isError && getRefreshToken() && !refreshQuery.isFetching) {
      refreshQuery.refetch();
    }
  }, [tokenQuery.isError, getRefreshToken, refreshQuery]);

  const isLoading = tokenQuery.isLoading || refreshQuery.isLoading;
  const error =
    tokenQuery.error && refreshQuery.error ? refreshQuery.error : null;
  const hasValidToken = !!getAccessToken();

  return {
    isLoading,
    error,
    hasValidToken,
    tokenQuery,
    refreshQuery,
  };
};
