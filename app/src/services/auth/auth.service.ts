import useUserStore from "../../@hooks/store/userStore.hook";
import type { TUser } from "../../@types/user/user.type";
import { jwt } from "../../util/jwt.util";

export const authService = {
  login(accessToken: string | null, refreshToken: string | null) {
    if (accessToken === null || refreshToken === null) {
      this.setState("loggedOut");
      return;
    }
    this.setState("loggedIn", accessToken, refreshToken);
  },
  logout() {
    this.setState("loggedOut");
  },
  setState(
    stateType: "loggedIn" | "loggedOut",
    accessToken: string | null = null,
    refreshToken: string | null = null,
  ) {
    const userStore = useUserStore.getState();

    switch (stateType) {
      case "loggedIn":
        if (accessToken === null || refreshToken === null) {
          this.removeUser();
          return;
        }
        userStore.setAccessToken(accessToken);
        userStore.setRefreshToken(refreshToken);
        userStore.setUser(this.getUser());
        break;
      case "loggedOut":
        this.removeUser();
        break;
      default:
        this.removeUser();
    }
  },
  getUser() {
    const userStore = useUserStore.getState();
    return jwt.decode<TUser>(userStore.getAccessToken());
  },
  removeUser() {
    const userStore = useUserStore.getState();
    userStore.removeAccessToken();
    userStore.removeRefreshToken();
    userStore.removeUser();
  },
  getAccessToken() {
    const userStore = useUserStore.getState();
    return userStore.getAccessToken();
  },
  getRefreshToken() {
    const userStore = useUserStore.getState();
    return userStore.getRefreshToken();
  },
};
