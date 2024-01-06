import {createContext, FC, useState } from "react";
import { loginService, registerService } from "../services/authService";

interface IAuth {
  authToken: string | null;
  loginUser: (login: string, password: string) => void;
  registerUser: (firstName: string, lastName: string, login: string, password: string) => void;
  logoutUser: () => void;
};

export const AuthContext = createContext<IAuth>({
  authToken: null,
  loginUser: (login, password) => {},
  registerUser: (firstName, lastName, login, password) => {},
  logoutUser: () => {}
});

interface Props {
  children: React.ReactNode;
}

const AUTH_TOKEN_KEY = 'auth_token';

const AuthProvider: FC<Props> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(localStorage.getItem(AUTH_TOKEN_KEY));

  const loginUser = (login: string, password: string) => {
    loginService(login, password, writeAuthToken);
  }

  const logoutUser = () => {
    writeAuthToken(null);
  }

  const registerUser = (firstName: string, lastName: string, login: string, password: string) => {
    // call register service
    registerService(firstName, lastName, login, password, writeAuthToken);
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
        loginUser,
        registerUser,
        logoutUser
      }}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;
