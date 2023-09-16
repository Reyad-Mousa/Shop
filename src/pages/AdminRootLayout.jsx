import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Outlet } from "react-router-dom";
import Admin from "../components/Admin";
import { Row } from "react-bootstrap";

function AdminRootLayout() {
  return (
    <Container>
      <Admin />
      <Row>
        <Col className="d-flex flex-wrap ">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default AdminRootLayout;
