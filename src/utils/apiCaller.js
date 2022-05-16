import jwtDecode from "jwt-decode";
import validator from "validator";
const getToken = () => {
  return localStorage.getItem("token");
};

const isAuthenticated = () => {
  const token = localStorage.getItem("token") || "";
  if (validator.isJWT(token)) {
    const decodedToken = jwtDecode(token);
    const currentDate = new Date();

    // JWT exp is in seconds
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      return false;
    } else {
      return true;
    }
  }
};
/* eslint-disable import/no-anonymous-default-export */
const checkStatus = (response) => {
  // raises an error in case response status is not a success
  if (response.status >= 200 && response.status < 300) {
    // Success status lies between 200 to 300
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const get = (needAuth = false, url, data) => {
  // performs api calls sending the required authentication headers
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (needAuth) {
    if (isAuthenticated()) {
      headers.Authorization = `Bearer ${getToken()}`;
    }
  }

  return fetch(url, {
    headers,
    method: "GET",
  })
    .then(checkStatus)
    .then((response) => response.json());
};

const post = (needAuth = false, url, data) => {
  // performs api calls sending the required authentication headers
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (needAuth) {
    if (isAuthenticated()) {
      headers.Authorization = `Bearer ${getToken()}`;
    }
  }

  return fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(data),
  })
    .then(checkStatus)
    .then((response) => response.json());
};

export default {
  get,
  post,
};
