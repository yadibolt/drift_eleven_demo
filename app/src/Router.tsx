import { createBrowserRouter } from "react-router-dom";
import PrerenderLayout from "./components/layout/PrerenderLayout";
import PageLayout from "./components/layout/PageLayout";
import { bundleLoader } from "./query/layout/bundle.loader";
import { contentLoader } from "./query/content/content.loader";
import { queryClient } from "./query/query.client";
import Homepage from "./page/Homepage";
import Content from "./components/content/Content";
import Test from "./components/content/Test";
import ErrorBoundary from "./components/ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrerenderLayout />,
    errorElement: <ErrorBoundary />,
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
          {
            path: "/test",
            element: <Test />
          },
          {
            path: "/*",
            loader: contentLoader(queryClient),
            element: <Content />
          }
        ],
      },
    ],
  },
  {
    path: "/404",
    element: <div>404 Not Found</div>,
  },
]);
