import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(email, password) {
    const loggedUser = {
      id: Date.now().toString(),
      nome: "Cliente",
      name: "Cliente",
      email,
      tipo: "cliente",
    };

    setUser(loggedUser);
    return true;
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}