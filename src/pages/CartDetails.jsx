import React from "react";
import { Button, Card } from "react-bootstrap";

const CartDetails = () => {
  return (
    <div className="container p-2 mt-2 bg-body position-relative ">
      <div className="row d-flex  align-items-center">
        <div className="col-sm-8">
          <div className="card-body ">
            <h5 className="card-title">Special title treatment</h5>
            <p className=" d-flex overflow-hidden text-truncate ">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Button className="position-absolute bottom-0 start-0 rounded-0">
              Go somewhere
            </Button>
          </div>
        </div>
        <div className="col-sm-4">
          <Card.Img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
