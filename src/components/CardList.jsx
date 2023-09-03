import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const CardList = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-primary">Add</Button>
          <Button variant="outline-success">More Details</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default CardList;
