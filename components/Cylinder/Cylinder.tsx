import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { getColor } from "./fnc/getColor";

interface Props {
  radius: number;
  faceCount: number;
  rotateX: number;
}

type StyleProps = Pick<Props, "radius">;
type SceneProps = Pick<Props, "rotateX">;

interface FaceProps {
  radius: number;
  faceCount: number;
  index: number;
  backgroundColor: string;
  faceWidth: number;
}

const Cylinder: React.FC<Props> = ({ radius, faceCount, rotateX }) => {
  const [array, setArray] = useState<null[]>([]);
  const [faceWidth, setFaceWidth] = useState<number>(0);

  const handleArray = (value: null[]) => setArray(value);
  const handleFaceWidth = (value: number) => setFaceWidth(value);

  useEffect(() => {
    if (faceCount) {
      handleArray(new Array(faceCount).fill(null));
    }
  }, [faceCount]);

  useEffect(() => {
    if (radius && faceCount) {
      handleFaceWidth(Math.floor(Math.floor(2 * Math.PI * radius) / faceCount));
    }
  }, [radius, faceCount]);

  return (
    <Container radius={radius}>
      <Scene rotateX={rotateX}>
        <Top radius={radius} />
        {array.map((_, index) => {
          const backgroundColor = getColor(index) as string;
          return (
            <Face
              key={index}
              radius={radius}
              backgroundColor={backgroundColor}
              faceCount={faceCount}
              index={index}
              faceWidth={faceWidth}
            />
          );
        })}
        <Buttom radius={radius} />
      </Scene>
    </Container>
  );
};

export default Cylinder;

const Container = styled.div<StyleProps>`
  width: ${({ radius }) => 2 * radius}px;
  height: ${({ radius }) => 3 * radius}px;
`;

const Scene = styled.div<SceneProps>`
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: 100%;

  transform: rotateX(${({ rotateX }) => rotateX}deg);
`;

const CommonCircleStyle = css<StyleProps>`
  position: absolute;
  width: ${({ radius }) => 2 * radius}px;
  height: ${({ radius }) => 2 * radius}px;
  border-radius: 100%;
  opacity: 0.7;
`;

const Top = styled.div<StyleProps>`
  ${CommonCircleStyle}
  top: 0;
  transform: rotateX(90deg) translateZ(${({ radius }) => radius}px);
  background-color: #ffffff;
`;

const Buttom = styled.div<StyleProps>`
  ${CommonCircleStyle}
  bottom: 0;
  transform: rotateX(90deg) translateZ(${({ radius }) => -radius}px);
  background-color: yellow;
`;

const spin = (faceCount: number, index: number, radius: number) => keyframes`
  to {
    transform: rotateY(calc(360deg / ${faceCount} * ${index} + 360deg)) translateZ(${radius}px) skew(-5deg);
  }
`;

const Face = styled.div<FaceProps>`
  position: absolute;
  left: calc(50% - ${({ faceWidth }) => Math.floor(faceWidth / 2)}px);
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ faceWidth }) => faceWidth}px;
  height: 100%;

  transform: rotateY(
      ${({ faceCount, index }) => Math.floor(360 / faceCount) * index}deg
    )
    translateZ(${({ radius }) => radius}px) skew(-5deg);

  opacity: 0.7;
  animation: ${({ faceCount, index, radius }) => spin(faceCount, index, radius)}
    15s infinite linear;
`;
