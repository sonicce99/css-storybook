import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  lines: number;
  width: number;
  height: number;
}

type Size = Pick<Props, "width" | "height">;

interface RingProps {
  color: string;
  angle: number;
}

const App: React.FC<Props> = ({ lines, width, height }) => {
  const [array, setArray] = useState<null[]>([]);

  useEffect(() => {
    handleArray(lines);
  }, [lines]);

  const handleArray = (lines: number) => {
    setArray(new Array(lines).fill(null));
  };

  const getRandomColor = () => {
    return "#" + Math.round(Math.random() * 0xffffff).toString(16);
  };

  return (
    <Container width={width} height={height}>
      <Scene>
        {array.map((_, index) => {
          const color = getRandomColor();
          return <Ring color={color} angle={index} key={index} />;
        })}
      </Scene>
    </Container>
  );
};

export default App;

const sceneAnimation = keyframes`
      to {
    transform: rotateX(360deg) rotateY(360deg);
  }
`;

const ringAnimation = keyframes`
  to {
    opacity: 1;
  }
`;

const Container = styled.div<Size>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin: 0 auto;
  margin-top: calc(50vh - ${({ height }) => Math.floor(height / 2)}px);
`;

const Scene = styled.div`
  width: 100%;
  height: 100%;

  transform-style: preserve-3d;
  position: relative;
  transform: rotateX(0deg) rotateY(0deg);

  animation: ${sceneAnimation} 7.5s 1.3s infinite linear;
`;

const Ring = styled.div<RingProps>`
  position: absolute;
  width: 100%;
  height: 100%;

  border: 6px;
  border-style: solid;
  border-radius: 50%;
  color: ${({ color }) => color};
  transform: rotateY(${({ angle }) => angle * 5}deg);
  opacity: 0;

  animation: ${ringAnimation} 0.75s forwards ease-in-out;
`;
