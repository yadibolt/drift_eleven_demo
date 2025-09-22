import { createBrowserRouter } from "react-router-dom";
import PrerenderLayout from "./components/layout/PrerenderLayout";
import PageLayout from "./components/layout/PageLayout";
import { bundleLoader } from "./query/layout/bundle.loader";
import { queryClient } from "./query/query.client";

console.log("Router.tsx is being imported!!!");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrerenderLayout />,
    children: [
      {
        index: true,
        element: <PageLayout />,
        loader: bundleLoader(queryClient),
      },
    ],
  },
  {
    path: "/404",
    element: <div>404 Not Found</div>,
  },
]);
