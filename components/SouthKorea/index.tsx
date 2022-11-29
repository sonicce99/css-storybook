import React, { useState } from "react";
import styled from "styled-components";
import Circle from "./Circle";

const App: React.FC = () => {
  const [width, setWidth] = useState<number>(600);

  return (
    <Container width={width}>
      <Circle width={width} />
    </Container>
  );
};

export default App;

interface StyleProps {
  width: number;
}

const Container = styled.div<StyleProps>`
  width: ${({ width }) => width}px;
  height: ${({ width }) => (width / 3) * 2}px;
  border: 3px solid black;
  background-color: #ffffff;
`;
