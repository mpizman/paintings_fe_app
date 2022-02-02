export interface IUser {
  username: String;
  token: String;
  roles: String[];
}

export interface IUserContext {
  user: IUser;
  setUser: (user: IUser) => void;
}