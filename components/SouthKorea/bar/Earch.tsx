import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LongBar from "./atom/LongBar";
import ShortBar from "./atom/ShortBar";

interface Props {
  width: number;
}

interface StyleProps extends Props {
  locationX: number;
  locationY: number;
}

// 곤
const Earth: React.FC<Props> = ({ width }) => {
  const [locationX, setLocationX] = useState<number>(0);
  const [locationY, setLocationY] = useState<number>(0);

  useEffect(() => {
    handleLocationX(width);
    handleLocationY(width);
  }, [width]);

  const handleLocationX = (width: number) =>
    setLocationX(Math.floor(width / 6) - 6);
  const handleLocationY = (width: number) =>
    setLocationY(Math.floor((Math.floor(width / 6) * 2) / 3));

  return (
    <Container locationX={locationX} locationY={locationY} width={width}>
      <LongBar width={width} />
      <ShortBar width={width} barMargin />
      <LongBar width={width} barMargin />
    </Container>
  );
};

export default Earth;

const Container = styled.div<StyleProps>`
  width: ${({ width }) => Math.floor(width / 6)}px;
  height: ${({ width }) => Math.floor(width / 9)}px;

  transform: translate(
      ${({ locationX }) => `${locationX}`}px,
      ${({ locationY }) => `${locationY}`}px
    )
    rotate(55deg);
  position: absolute;
  transform-origin: center;
`;
