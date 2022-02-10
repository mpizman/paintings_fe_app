import { IUser, IUserContext } from "../type";

export const logoutService = (userContext: IUserContext) => {
  userContext.setUser({} as IUser);
  localStorage.removeItem("user");
}