import React from "react";
import styled from "styled-components";
import Coin from "./Coin";

interface Props {
  width: number;
  animation_time: number;
}

const App: React.FC<Props> = ({ width, animation_time }) => {
  return (
    <Container>
      <Coin width={width} animation_time={animation_time} />
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
