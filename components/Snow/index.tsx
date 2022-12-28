import React from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";
import Snow from "./snow";

interface StyleProps {
  opacity: number;
  transform: string;
  animation: FlattenSimpleInterpolation;
}

const App: React.FC = () => {
  const size = 150;
  const array = new Array(size).fill(null);

  return (
    <Container>
      {array.map((_, index) => {
        const snowObj = new Snow();
        return <SnowStyle {...snowObj.getProps()} key={index} />;
      })}
    </Container>
  );
};

export default App;

const Container = styled.div`
  background: linear-gradient(#123 30%, #667);
  width: 100vw;
  height: 100vh;
`;

const SnowStyle = styled.div<StyleProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
  opacity: ${({ opacity }) => opacity};
  transform: ${({ transform }) => transform};
  ${({ animation }) => animation};

  position: absolute;
`;
