import { RouterProvider } from "react-router-dom";
import { UserStoreContext } from "./@contexts/store/userStore.context";
import useUserStore from "./@hooks/store/use-userStore.hook";
import { useMemo } from "react";
import { router } from "./Router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query/query.client";
import AuthGuard from "./components/auth/AuthGuard";

function App() {
  const userStore = useUserStore();
  const userStoreMemo = useMemo(() => ({ store: userStore }), [userStore]);

  console.log("App is rendering");

  return (
    <UserStoreContext.Provider value={userStoreMemo}>
      <QueryClientProvider client={queryClient}>
        <AuthGuard>
          <RouterProvider router={router} />
        </AuthGuard>
      </QueryClientProvider>
    </UserStoreContext.Provider>
  );
}

export default App;
