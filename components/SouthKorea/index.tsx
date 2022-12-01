import React from "react";
import styled from "styled-components";
import Earth from "./bar/Earch";
import Fire from "./bar/Fire";
import Sky from "./bar/Sky";
import Water from "./bar/Water";
import Circle from "./Circle";

interface Props {
  width: number;
}

const App: React.FC<Props> = ({ width }) => {
  return (
    <Container width={width}>
      <Sky width={width} />
      <Water width={width} />
      <Circle width={width} />
      <Earth width={width} />
      <Fire width={width} />
    </Container>
  );
};

export default App;

const Container = styled.div<Props>`
  width: ${({ width }) => width}px;
  position: relative;
  height: ${({ width }) => Math.floor(width / 3) * 2}px;
  border: 3px solid black;
  background: linear-gradient(-33.5deg, #f3f5f0 50%, #dfe8eb 50%);

  top: calc(50vh - ${({ width }) => Math.floor(width / 3)}px);
  margin: 0 auto;
`;
