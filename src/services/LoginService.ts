export const attempLogin = (username: String, password: String) => {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "username": username,
    "password": password
  });

  const requestOptions = {
    method: 'POST',
    headers,
    body: raw,
    redirect: "follow" as RequestRedirect
  };

  return fetch("http://ec2-13-59-210-173.us-east-2.compute.amazonaws.com:80/login", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result);
      return result;
    })
    .catch(error => console.log('error', error));
}