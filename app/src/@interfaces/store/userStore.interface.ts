import type { TUser } from "../../@types/user/user.type";

export interface IUserStore {
  user: TUser | null;
  getUser: () => TUser | null;
  setUser: (user: TUser | null) => void;
  removeUser: () => void;
  accessToken: string | null;
  getAccessToken: () => string | null;
  setAccessToken: (token: string | null) => void;
  removeAccessToken: () => void;
  refreshToken: string | null;
  getRefreshToken: () => string | null;
  setRefreshToken: (token: string | null) => void;
  removeRefreshToken: () => void;
}
