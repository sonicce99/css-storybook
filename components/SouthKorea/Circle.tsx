import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  width: number;
}

interface StyleProps {
  circleWidth: number;
}

const Circle: React.FC<Props> = ({ width }) => {
  const [circleWidth, setCircleWidth] = useState<number>(0);

  const handleCircleWidth = (value: number) => setCircleWidth(value);

  useEffect(() => {
    handleCircleWidth(Math.floor(width / 3));
  }, [width]);

  return (
    <Container circleWidth={circleWidth}>
      <BigRed circleWidth={circleWidth} />
      <BigBlue circleWidth={circleWidth} />

      <SmallCircle circleWidth={circleWidth}>
        <SmallBlue circleWidth={circleWidth} />
        <SmallRed circleWidth={circleWidth} />
      </SmallCircle>
    </Container>
  );
};

export default Circle;

const rotate = keyframes`
  from {
    transform: rotate(123.5deg);
  }

  to {
    transform: rotate(483.5deg);
  }
`;

const Container = styled.div<StyleProps>`
  width: ${({ circleWidth }) => circleWidth}px;
  height: ${({ circleWidth }) => circleWidth}px;

  position: relative;
  top: ${({ circleWidth }) => Math.floor(circleWidth / 2)}px;
  margin: 0 auto;

  animation: ${rotate} 10s ease-in-out infinite;
`;

const BigRed = styled.div<StyleProps>`
  border-radius: ${({ circleWidth }) =>
    `${Math.floor(circleWidth / 2)}px 0 0 ${Math.floor(circleWidth / 2)}px`};
  transform-origin: right;
  background-color: #d0303b;
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ circleWidth }) => Math.floor(circleWidth / 2)}px;
  height: ${({ circleWidth }) => circleWidth}px;
`;

const BigBlue = styled.div<StyleProps>`
  border-radius: ${({ circleWidth }) =>
    `0 ${Math.floor(circleWidth / 2)}px ${Math.floor(circleWidth / 2)}px 0`};
  transform-origin: left;
  background-color: #134b9e;
  position: absolute;
  top: 0;
  right: 0;
  width: ${({ circleWidth }) => Math.floor(circleWidth / 2)}px;
  height: ${({ circleWidth }) => circleWidth}px;
`;

const SmallCircle = styled.div<StyleProps>`
  width: ${({ circleWidth }) => Math.floor(circleWidth / 2)}px;
  height: ${({ circleWidth }) => circleWidth}px;
  position: relative;
  top: 0;
  left: ${({ circleWidth }) => Math.floor(circleWidth / 4)}px;
`;

const SmallRed = styled.div<StyleProps>`
  background-color: #d0303b;
  width: ${({ circleWidth }) => Math.floor(circleWidth / 2)}px;
  height: ${({ circleWidth }) => Math.floor(circleWidth / 2)}px;
  border-radius: 50%;

  position: absolute;
  bottom: 0;
  left: 0;
`;

const SmallBlue = styled.div<StyleProps>`
  background-color: #134b9e;
  width: ${({ circleWidth }) => Math.floor(circleWidth / 2)}px;
  height: ${({ circleWidth }) => Math.floor(circleWidth / 2)}px;
  border-radius: 50%;

  position: absolute;
  top: 0;
  right: 0;
`;
