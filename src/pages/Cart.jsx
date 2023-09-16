import { useContext } from "react";
import GlobalStateContext from "../hooks/GlobalStateContext";
import { Button } from "react-bootstrap";
import CartDetails from "./CartDetails";

function Cart() {
  const { toggle, setToggle } = useContext(GlobalStateContext);

  return (
    <div>
      <aside
        className="overflow-auto"
        style={{
          right: toggle ? "0" : "-400px",
          transition: "0.3s",
          position: "fixed",
          top: 0,
          width: "400px",
          height: "100vh",
          background: "#fff",
          zIndex: "1000",
          border: "1px solid",
        }}
      >
        <Button
          className=" d-inline w-100 rounded-0"
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
