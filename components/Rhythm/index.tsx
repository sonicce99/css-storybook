import React from "react";
import styled from "styled-components";
import Rhythm from "./Rhythm";

const App = () => {
  return (
    <Container>
      <Rhythm />
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
