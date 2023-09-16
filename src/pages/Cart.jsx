import { useContext } from "react";
import GlobalStateContext from "../hooks/GlobalStateContext";
import { Button } from "react-bootstrap";
import CartDetails from "./CartDetails";

function Cart() {
  const { toggle, setToggle } = useContext(GlobalStateContext);

  return (
    <div>
      <aside
        style={{
          right: toggle ? "0" : "-400px",
          transition: "0.3s",
          position: "fixed",
          top: 0,
          width: "400px",
          height: "100vh",
          background: "rgb(165 165 165)",
          zIndex: "1000",
        }}
      >
        <Button
          className=" d-inline w-100"
          variant="danger"
          onClick={setToggle}
        >
          Exit
        </Button>
        <CartDetails />
      </aside>
    </div>
  );
}

export default Cart;
