export interface IUser {
  username: String;
  token: string;
  roles: String[];
}

export interface IUserContext {
  user: IUser;
  setUser: (user: IUser) => void;
}

export interface LoginAttempResult {
  access_token: string;
}

export interface decodeJwtResponse {
  exp: number;
  iss: String;
  roles: String[];
  sub: String;
}