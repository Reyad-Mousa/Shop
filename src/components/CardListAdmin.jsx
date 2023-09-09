import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { NavLink } from "react-bootstrap";
import Loading from "./Loading";

const CardListUser = ({ data, deleteProduct }) => {
  const deleteHandler = (item) => {
    if (window.confirm(`Are you sure you want to delete : ${item.title}`)) {
      deleteProduct(item.id);
    }
  };
  const records = data.map((el, index) => (
    <div key={el.id}>
      <Card style={{ width: "18rem", margin: "15px" }} key={++index}>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Card.Body key={el.id} className="h-25">
          <Card.Title>{el.title}</Card.Title>
          <Card.Text
            className="overflow-hidden text-truncate 
        
          "
          >
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the
            card title and make up the bulk of the card's content. Some quick
            example text to build on the card title and make up the bulk of the
            card's content. Some quick example text to build on the card title
            and make up the bulk of the card's content.
          </Card.Text>
          <ButtonGroup
            className="d-flex justify-content-between"
            aria-label="Basic example"
          >
            <NavLink onClick={() => deleteHandler(el)}>
              <Button variant="outline-danger">Delete</Button>
            </NavLink>
            <NavLink href="admin/edit/product/:id">
              <Button variant="outline-primary">Edit</Button>
            </NavLink>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </div>
  ));

  return <Loading>{records}</Loading>;
};

export default CardListUser;
