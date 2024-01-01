import {clearAuthToken, request, setAuthToken } from "../axiosHelper";

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
  }).catch((error: any) => {
    // FIXME: expired token sent perhaps? is this even needed???
    console.log(error);
    clearAuthToken();
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
  }).catch((error: any) => {
    // FIXME: expired token sent perhaps? is this even needed??
    console.log(error);
    clearAuthToken();
  });
};