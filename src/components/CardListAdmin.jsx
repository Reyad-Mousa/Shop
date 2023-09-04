import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { NavLink } from "react-bootstrap";
const CardListAdmin = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <ButtonGroup aria-label="Basic example">
            <NavLink href="admin/delete/product/:id">
              <Button variant="outline-danger">Delete</Button>
            </NavLink>
            <NavLink href="admin/edit/product/:id">
              <Button variant="outline-primary">Edit</Button>
            </NavLink>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardListAdmin;
