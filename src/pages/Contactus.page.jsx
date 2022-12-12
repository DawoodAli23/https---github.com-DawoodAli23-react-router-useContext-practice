import { Button, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useSnackbarContext } from "../context/Snackbar.context";

const Contactus = () => {
  const navigate = useNavigate();
  const snackbar = useSnackbarContext();
  return (
    <Row
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        onClick={() => snackbar?.updateMessageContext("From contact us page")}
      >
        Message
      </Button>
      <Button onClick={() => navigate("/")} type="link">
        Go Back
      </Button>
    </Row>
  );
};

export default Contactus;
