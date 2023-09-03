import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            {isActive ? (
              <Nav.Link className="allProducts " href="#features">
                All Products
              </Nav.Link>
            ) : null}
            {isActive ? (
              <Nav.Link className="addProducts " href="#pricing">
                Add Products
              </Nav.Link>
            ) : null}
          </Nav>
          <Row>
            <Col xs="auto">
              <Button
                className="admin"
                type="submit"
                onClick={() => setIsActive(!isActive)}
              >
                Admin
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
