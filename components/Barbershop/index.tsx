import React from "react";
import styled from "styled-components";
import Barbershop from "./Barbershop";

const App = () => {
  return (
    <Container>
      <Barbershop />
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
