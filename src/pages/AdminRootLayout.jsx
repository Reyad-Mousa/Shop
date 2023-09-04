import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Outlet } from "react-router-dom";
import Admin from "../components/Admin";

function AdminRootLayout() {
  return (
    <Container>
      <Admin />
      <Row>
        <Col sm>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default AdminRootLayout;
