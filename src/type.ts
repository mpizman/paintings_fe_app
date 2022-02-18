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

export interface Peagable {
  offset: Number;
  pageNumber: Number;
  pageSize: Number;
  paged: boolean;
  sort: Sort;
  unpaged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface searchPaintingsResponse {
  content: Painting[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: Number
  numberOfElements: Number
  pageable: Peagable;
  size: Number;
  sort: Sort;
  totalElements: Number;
  totalPages: Number;
}

export interface Painting {
  artist: String;
  description: String;
  id: String;
  name: String;
  price: Number;
  url: string;
  date: Date;
  uploaderUsername: String;
  score?: Number;
}