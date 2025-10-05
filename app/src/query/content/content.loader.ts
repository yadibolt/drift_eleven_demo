import type { QueryClient } from "@tanstack/react-query";
import type { LoaderFunction } from "react-router-dom";
import { getContentQuery } from "./content.query";

export const contentLoader = (client: QueryClient): LoaderFunction => {
  return async ({ request }) => {
    const url = new URL(request.url);
    const path = url.pathname;

    const query = getContentQuery(path);

    return (
      client.getQueryData(query.queryKey) || (await client.fetchQuery(query))
    );
  };
};
