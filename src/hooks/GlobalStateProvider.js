import React from "react";
import useGlobalState from "../hooks/useGlobalState";
import GlobalStateContext from "./GlobalStateContext";

const GlobalStateProvider = ({ children }) => {
  const [state, increment, toggle, setToggle] = useGlobalState();

  return (
    <GlobalStateContext.Provider
      value={{ state, increment, toggle, setToggle }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
