/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export let TokenContext = createContext("");

export default function TokenContextProvider({ children }) {
  useEffect(() => {
    if (localStorage.getItem("userToken") != null) {
      setToken(localStorage.getItem("userToken"));
    }
  }, []);

  let [token, setToken] = useState(null);
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}
