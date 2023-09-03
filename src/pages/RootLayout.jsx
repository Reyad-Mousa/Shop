import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function ContainerExample() {
  return (
    <Container>
      <Header />
      <Row>
        <Col sm>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;
