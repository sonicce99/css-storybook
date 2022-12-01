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

// 감
const Water: React.FC<Props> = ({ width }) => {
  const [locationX, setLocationX] = useState<number>(0);
  const [locationY, setLocationY] = useState<number>(0);

  useEffect(() => {
    handleLocationX(width);
    handleLocationY(width);
  }, [width]);

  const handleLocationX = (width: number) =>
    setLocationX(Math.floor(width / 3) * 2 + 3);
  const handleLocationY = (width: number) =>
    setLocationY(Math.floor((Math.floor(width / 6) * 2) / 3) - 5);

  return (
    <Container locationX={locationX} locationY={locationY} width={width}>
      <ShortBar width={width} />
      <LongBar width={width} barMargin />
      <ShortBar width={width} barMargin />
    </Container>
  );
};

export default Water;

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
