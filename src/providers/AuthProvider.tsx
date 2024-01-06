import {createContext, FC, useState } from "react";

interface IAuth {
  authToken: string | null;
  login: (authToken: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<IAuth>({
  authToken: null,
  login: (authToken: string) => {},
  logout: () => {}
});

interface Props {
  children: React.ReactNode;
}

const AuthProvider: FC<Props> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const login = (authToken: string) => {
    setAuthToken(authToken);
  }

  const logout = () => {
    setAuthToken(null);
  }

  return (
    <AuthContext.Provider
      value={{
        authToken,
        login,
        logout
      }}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;
