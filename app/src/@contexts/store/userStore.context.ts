import { createContext } from "react";
import type { IUserStore } from "../../@interfaces/store/userStore.interface";
import useUserStore from "../../@hooks/store/userStore.hook";

interface IUserStoreContext {
  store: IUserStore;
}

export const UserStoreContext = createContext<IUserStoreContext>({
  store: useUserStore.getState(),
});
