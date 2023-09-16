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

  const [toggle, setToggle] = useState(false);
  function show() {
    setToggle(!toggle);
  }

  // Define the toggleSidebar function
  return [state, increment, toggle, show];
}
