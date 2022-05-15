import Constants from "../Constants";
import { LoginAttempResult, Painting, searchPaintingsResponse } from "../type";

declare var jQuery: any;

export const fetchApi = (
  method: "POST" | "GET" | "DELETE" | "PATCH",
  endpoint: String,
  body?: any,
  token?: String
): Promise<any> => {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }

  const requestOptions = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    redirect: "follow" as RequestRedirect
  };

  return fetch(`${Constants.BE_URL}/${endpoint}`, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error(String(response.status));
      }
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(error => error);
}

export const attempLoginService = (username: String, password: String): Promise<LoginAttempResult> => {
  const body = {
    "username": username,
    "password": password
  };

  return fetchApi("POST", "login", body);
}

export const getPaintingsService = (searchQuery?: String,
  uploaderUsername?: String,
  artist?: String,
  name?: String,
  sortField?: String,
  sortOrder?: String,
  pageNumber?: Number,
  rpp?: Number
): Promise<searchPaintingsResponse> => {
  const queryParams = {
    searchQuery,
    uploaderUsername,
    artist,
    name,
    sortField,
    sortOrder,
    pageNumber,
    rpp
  };

  const queryParamsString: String = jQuery.param(queryParams);

  return fetchApi("GET", `api/paintings?${queryParamsString}`)
}

export const postPaintingService = (name: String,
  description: String,
  url: String,
  artist: String,
  price: Number,
  date: Date,
  token: String): Promise<Painting> => {
  const body = {
    name,
    description,
    url,
    artist,
    price,
    date
  };

  return fetchApi("POST", "api/painting", body, token);
}

export const getpaintingByIdService = (id: String): Promise<Painting> => {
  return fetchApi("GET", `api/painting/${id}`);
}

export const deletePaintingService = (id: String, token: String): Promise<String> => {
  return fetchApi("DELETE", `api/painting/${id}`, null, token);
}