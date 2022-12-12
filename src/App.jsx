import { Button, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  return (
    <>
      <Row
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Col>
          <Button type="primary" onClick={() => navigate("/home")}>
            Home Page
          </Button>
        </Col>
        <Col>
          <Button type="primary" onClick={() => navigate("/aboutus")}>
            About Us Page
          </Button>
        </Col>
        <Col>
          <Button type="primary" onClick={() => navigate("/contactus")}>
            Contact Us Page
          </Button>
        </Col>
      </Row>
    </>
  );
}
