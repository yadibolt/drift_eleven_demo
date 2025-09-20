import { UserStoreContext } from "./@contexts/store/userStore.context";
import useUserStore from "./@hooks/store/userStore.hook";
import { useMemo } from "react";

function App() {
  const userStore = useUserStore();
  const userStoreMemo = useMemo(() => ({ store: userStore }), [userStore]);

  return (
    <UserStoreContext.Provider value={userStoreMemo}>
      <h1>Hello World!</h1>
    </UserStoreContext.Provider>
  );
}

export default App;
