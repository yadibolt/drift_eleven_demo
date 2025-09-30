import { createBrowserRouter } from "react-router-dom";
import PrerenderLayout from "./components/layout/PrerenderLayout";
import PageLayout from "./components/layout/PageLayout";
import { bundleLoader } from "./query/layout/bundle.loader";
import { queryClient } from "./query/query.client";
import Homepage from "./page/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrerenderLayout />,
    children: [
      {
        path: "/",
        element: <PageLayout />,
        loader: bundleLoader(queryClient),
        children: [
          {
            index: true,
            element: <Homepage />,
          },
        ],
      },
    ],
  },
  {
    path: "/404",
    element: <div>404 Not Found</div>,
  },
]);
