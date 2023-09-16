import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderUser from "../components/HeaderUser";
import { Outlet } from "react-router-dom";
import GlobalStateProvider from "../hooks/GlobalStateProvider";
function RootLayout() {
  return (
    <GlobalStateProvider>
      <Container>
        <HeaderUser />
        <Row>
          <Col className="d-flex flex-wrap">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </GlobalStateProvider>
  );
}

export default RootLayout;
