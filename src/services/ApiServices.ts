import Constants from "../Constants";
import { LoginAttempResult } from "../type";

export const fetchApi = (
  method: "POST" | "GET" | "DELETE" | "PATCH",
  endpoint: String,
  body: any,
  token?: String
): Promise<any> => {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }

  const raw = JSON.stringify(body);


  const requestOptions = {
    method,
    headers,
    body: raw,
    redirect: "follow" as RequestRedirect
  };

  return fetch(`${Constants.BE_URL}/${endpoint}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(error => console.log('error', error));
}

export const attempLogin = (username: String, password: String) : Promise<LoginAttempResult> => {
  const body = {
    "username": username,
    "password": password
  };

  return fetchApi("POST", "login", body);
}