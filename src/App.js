import { Container } from "@mui/material";
import "./App.scss";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <>
      <div className="navbar"></div>
      <Container maxWidth="md">
        <Wrapper></Wrapper>
      </Container>
    </>
  );
}

export default App;
