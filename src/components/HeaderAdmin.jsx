import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import { useState } from "react";

const HeaderAdmin = () => {
  // const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="allProducts " href="/admin">
              All Products
            </Nav.Link>
            <Nav.Link className="addProducts " href="/admin/add-products">
              Add Products
            </Nav.Link>
          </Nav>

          <Row>
            <Col xs="auto">
              <Nav.Link href="/">
                <Button className="admin" type="submit">
                  Back
                </Button>
              </Nav.Link>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderAdmin;
