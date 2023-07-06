import { createContext, useState } from "react";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
