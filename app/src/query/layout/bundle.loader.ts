import type { QueryClient } from "@tanstack/react-query";
import type { LoaderFunction } from "react-router-dom";
import { getBundleQuery } from "./bundle.query";

export const bundleLoader = (client: QueryClient): LoaderFunction => {
  return async () => {
    const query = getBundleQuery();

    return (
      client.getQueryData(query.queryKey) || (await client.fetchQuery(query))
    );
  };
};
