import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { IUserStore } from "../../@interfaces/store/userStore.interface";

const useUserStore = create<IUserStore>()(
  devtools(
    persist(
      (set, get): IUserStore => ({
        user: null,
        getUser: () => get().user,
        setUser: (user) => set({ user }),
        removeUser: () => set({ user: null }),
        accessToken: null,
        getAccessToken: () => get().accessToken,
        setAccessToken: (token) => set({ accessToken: token }),
        removeAccessToken: () => set({ accessToken: null }),
        refreshToken: null,
        getRefreshToken: () => get().refreshToken,
        setRefreshToken: (token) => set({ refreshToken: token }),
        removeRefreshToken: () => set({ refreshToken: null }),
      }),
      { name: "user-store" },
    ),
  ),
);

export default useUserStore;
