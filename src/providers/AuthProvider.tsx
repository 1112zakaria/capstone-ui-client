import {createContext, FC, useState } from "react";
import { loginService, registerService } from "../services/authService";

interface IAuth {
  authToken: string | null;
  setAuthToken: (authToken: string | null) => void;
  loginUser: (login: string, password: string, callback?: (arg: string | null) => void) => void;
  registerUser: (firstName: string, lastName: string, login: string, password: string, callback?: (arg: string | null) => void) => void;
  logoutUser: () => void;
};

export const AuthContext = createContext<IAuth>({
  authToken: null,
  setAuthToken: (authToken) => {},
  loginUser: (login, password, callback?) => {},
  registerUser: (firstName, lastName, login, password, callback?) => {},
  logoutUser: () => {}
});

interface Props {
  children: React.ReactNode;
}

export const AUTH_TOKEN_KEY = 'auth_token';

const AuthProvider: FC<Props> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(localStorage.getItem(AUTH_TOKEN_KEY));

  const loginUser = (login: string, password: string, callback: (arg: string | null) => void = writeAuthToken) => {
    loginService(login, password, callback);
  }

  const logoutUser = () => {
    writeAuthToken(null);
  }

  const registerUser = (firstName: string, lastName: string, login: string, password: string, callback: (arg: string | null) => void = writeAuthToken) => {
    // call register service
    registerService(firstName, lastName, login, password, callback);
  }

  const writeAuthToken = (authToken: string | null) => {
    // write auth token into local storage and state
    setAuthToken(authToken);
    if (authToken) {
      localStorage.setItem(AUTH_TOKEN_KEY, authToken);
    } else {
      localStorage.removeItem(AUTH_TOKEN_KEY);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        authToken,
        setAuthToken: writeAuthToken,
        loginUser,
        registerUser,
        logoutUser
      }}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;
