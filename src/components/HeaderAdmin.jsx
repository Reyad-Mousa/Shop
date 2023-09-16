import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useNavigate, Link } from "react-router-dom";

const HeaderAdmin = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link
              className="allProducts text-decoration-none me-4 "
              to="/admin"
            >
              All Products
            </Link>
            <Link
              className="addProducts text-decoration-none"
              to="/admin/add-products"
            >
              Add Products
            </Link>
          </Nav>

          <Row>
            <Col xs="auto">
              <Link to="/">
                <Button className="admin" type="submit">
                  Back
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderAdmin;
