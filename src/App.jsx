import styled from "styled-components";
import Card from "./components/Card";
import GlobalStyles from "./styles/GlobalStyles";
import { ApiContext } from "./context/DataApi";
import { useContext } from "react";
const Container = styled.main`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const data = useContext(ApiContext);
  return (
    <>
      <GlobalStyles />
      <Container color={data.color} className="App">
        <Card id="quote-box" />
      </Container>
    </>
  );
}

export default App;
