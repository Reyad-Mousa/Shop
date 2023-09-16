import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../store/cartSlice";
const CartDetails = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const CartInfo = cart.map((el, index) => (
    <>
      <div className="container m-3 w-auto p-2 mt-2  position-relative  ">
        <div className="row d-flex  align-items-center m-0  border ">
          <div className="col-sm-4">
            <Card.Img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
          </div>

          <div className="col-sm-6">
            <div className="card-body ">
              <h5 className="card-title">{el.title}</h5>
              <p className=" d-flex overflow-hidden text-truncate ">
                {el.description}
              </p>
            </div>
          </div>
          <div className="col-sm-2 ">
            <button
              type="button"
              class="btn btn-outline-danger d-block"
              onClick={() => dispatch(deleteFromCart(el))}
            >
              <RiDeleteBin5Line />
            </button>
          </div>
        </div>
      </div>
    </>
  ));
  return <>{CartInfo}</>;
};

export default CartDetails;
