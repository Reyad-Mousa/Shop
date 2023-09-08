import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderUser from "../components/HeaderUser";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <Container>
      <HeaderUser />
      <Row>
        <Col className="d-flex flex-wrap justify-content-evenly">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default RootLayout;
