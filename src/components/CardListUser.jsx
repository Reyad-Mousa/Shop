import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { NavLink } from "react-bootstrap";
import Loading from "./Loading";

const CardListUser = ({ data, loading, error }) => {
  const records = data.map((el, index) => (
    <div key={el.id}>
      <Card key={el.id} style={{ width: "18rem", margin: "15px" }}>
        <Card.Img variant="top" src={el.image} alt="1111111" />
        <Card.Body key={el.id} className="h-25">
          <Card.Title>{el.title}</Card.Title>
          <Card.Text className="overflow-hidden text-truncate">
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
            <NavLink href="">
              <Button variant="outline-primary">+</Button>
            </NavLink>
            <NavLink href="products/details/:id">
              <Button variant="outline-success">More Details</Button>
            </NavLink>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </div>
  ));

  return <Loading>{records}</Loading>;
};

export default CardListUser;
