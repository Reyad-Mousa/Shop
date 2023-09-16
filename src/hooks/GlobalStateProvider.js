import React from "react";
import useGlobalState from "../hooks/useGlobalState";
import GlobalStateContext from "./GlobalStateContext";

const GlobalStateProvider = ({ children }) => {
  const [state, increment] = useGlobalState();

  return (
    <GlobalStateContext.Provider value={{ state, increment }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
