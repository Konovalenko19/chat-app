import { get, post, handleError } from "utils/requests";

export const checkAuth = () =>
  get({
    url: "/user/checkAuth",
  }).then((response) => response.data, handleError);

export const getProfile = (token) =>
  get({
    url: "/user/profile",
  }).then((response) => response.data, handleError);

export const login = ({ email, password }) =>
  post({
    url: "/user/login",
    data: { email, password },
  }).then((response) => response.data, handleError);

export const signup = ({ email, name, password }) =>
  post({
    url: "/user/signup",
    data: { email, name, password },
  }).then((response) => response.data, handleError);
