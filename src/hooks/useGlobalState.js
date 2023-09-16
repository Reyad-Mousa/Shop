// useGlobalState.js
import { useState } from "react";

export default function useGlobalState() {
  const [state, setState] = useState({
    count: 0,
  });

  function increment() {
    setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  return [state, increment];
}