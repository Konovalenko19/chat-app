import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 60000,
  headers: {
    "Accept-Language": "ru-RU",
    "Content-Type": "application/json",
  },
});

export const get = ({ url, params, headers }) =>
  axiosInstance({
    method: "GET",
    url,
    headers: {
      ...headers,
      Authorization: Cookies.get("expertProToken"),
    },
    params,
  });

export const post = ({ url, data, headers }) =>
  axiosInstance({
    method: "POST",
    url,
    headers: {
      ...headers,
      Authorization: Cookies.get("expertProToken"),
    },
    data,
  });

export const deleteReq = ({ url, data, headers }) =>
  axiosInstance({
    method: "DELETE",
    url,
    headers: {
      ...headers,
      Authorization: Cookies.get("expertProToken"),
    },
    data,
  });

export const patch = ({ url, data, headers }) =>
  axiosInstance({
    method: "PATCH",
    url,
    headers: {
      ...headers,
      Authorization: Cookies.get("expertProToken"),
    },
    data,
  });

export const put = ({ url, data, headers }) =>
  axiosInstance({
    method: "PUT",
    url,
    headers: {
      ...headers,
      Authorization: Cookies.get("expertProToken"),
    },
    data,
  });

export const handleError = (error) => {
  if (error.response) {
    throw error.response.data;
  }
  throw new Error("Error!");
};
