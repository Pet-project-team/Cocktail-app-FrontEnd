import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  const login = (token) => {
    setAuthenticated(true);
    setAccessToken(token);
  };

  const logout = () => {
    setAuthenticated(false);
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};