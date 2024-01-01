import {clearAuthToken, request, setAuthToken } from "../axiosHelper";

export const getLogin = () => {
  return window.localStorage.getItem('login');
}

const setLogin = (login: string) => {
  window.localStorage.setItem('login', login);
}

const clearLogin = () => {
  window.localStorage.removeItem('login');
}

export const loginService = (login: string, password: string) => {
  console.log('calling login service');
  clearAuthToken();
  request(
    'POST',
    'http://localhost:5000/login',
    {login: login, password: password}
  ).then((response: any) => {
    console.log(response.data);
    setAuthToken(response.data.token);
    setLogin(response.login);
  }).catch((error: any) => {
    // FIXME: expired token sent perhaps? is this even needed???
    console.log(error);
    clearAuthToken();
    clearLogin();
  });
};

export const registerService = (firstName: string, lastName: string, login: string, password: string) => {
  console.log('submitting form');
  clearAuthToken();
  request(
    'POST',
    'http://localhost:5000/register',
    {login: login, password: password, firstName: firstName, lastName: lastName}
  ).then((response: any) => {
    console.log(response.data);
    setAuthToken(response.data.token);
    setLogin(response.data.login);
  }).catch((error: any) => {
    // FIXME: expired token sent perhaps? is this even needed??
    console.log(error);
    clearAuthToken();
    clearLogin();
  });
};