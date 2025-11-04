import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (phoneNumber, password) => {
    setIsLoading(true);
    console.log("Logging in with:", phoneNumber, password);

    setTimeout(() => {
      setUser({
        id: "123",
        phoneNumber,
      });
      setIsLoading(false);
    }, 1500);
  };

  const register = async (data) => {
    setIsLoading(true);
    console.log("Registering user with phone:", data.phoneNumber);

    setTimeout(() => {
      setUser({
        id: "124",
        phoneNumber: data.phoneNumber,
      });
      setIsLoading(false);
    }, 1500);
  };

  const logout = () => {
    setUser(null);
  };

  const contextValue = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
