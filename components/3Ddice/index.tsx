import React from "react";
import styled, { css, keyframes } from "styled-components";

interface Props {
  width: number;
  perspective: number;
}

type StyleProps = Pick<Props, "width">;

const ThreeDementionDice: React.FC<Props> = ({ width, perspective }) => {
  return (
    <View width={width} perspective={perspective}>
      <Cube width={width}>
        <Front width={width}>1</Front>
        <Top width={width}>2</Top>
        <Right width={width}>3</Right>
        <Left width={width}>4</Left>
        <Back width={width}>5</Back>
        <Bottom width={width}>6</Bottom>
      </Cube>
    </View>
  );
};

export default ThreeDementionDice;

const View = styled.div<Props>`
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  perspective: ${({ perspective }) => perspective}px;

  margin: 0 auto;
  margin-top: calc(50vh - ${({ width }) => width / 2}px);
`;

const rotate = keyframes`
  from {
    transform:  rotate3d(0,0,0,0deg);
  }

  to {
    transform: rotate3d(1,1,0,360deg);
  }
`;

const Cube = styled.div<StyleProps>`
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  transform: translateZ(${({ width }) => -Math.floor(width / 2)}px);

  animation: ${rotate} 5s infinite;
  position: relative;
`;

const CommonStyle = css`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Top = styled.div<StyleProps>`
  ${CommonStyle}
  background: rgba(210, 210, 0, 0.7);
  transform: rotateX(90deg)
    translateZ(${({ width }) => Math.floor(width / 2)}px);
`;

const Front = styled.div<StyleProps>`
  ${CommonStyle}
  background: rgba(90, 90, 90, 0.7);
  transform: translateZ(${({ width }) => Math.floor(width / 2)}px);
`;

const Back = styled.div<StyleProps>`
  ${CommonStyle}
  background: rgba(0, 210, 0, 0.7);
  transform: translateZ(${({ width }) => -Math.floor(width / 2)}px);
`;

const Left = styled.div<StyleProps>`
  ${CommonStyle}
  background: rgba(0, 0, 210, 0.7);
  transform: rotateY(-90deg)
    translateZ(${({ width }) => Math.floor(width / 2)}px);
`;

const Right = styled.div<StyleProps>`
  ${CommonStyle}
  background: rgba(210, 0, 0, 0.7);
  transform: rotateY(90deg)
    translateZ(${({ width }) => Math.floor(width / 2)}px);
`;

const Bottom = styled.div<StyleProps>`
  ${CommonStyle}
  background: rgba(210, 0, 210, 0.7);
  transform: rotateX(90deg)
    translateZ(${({ width }) => -Math.floor(width / 2)}px);
`;
