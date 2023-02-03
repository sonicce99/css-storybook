import React from "react";
import styled, { css, keyframes } from "styled-components";

interface Props {
  width: number;
  animation_time: number;
}

type PickWidth = Pick<Props, "width">;

const Coin: React.FC<Props> = ({ width, animation_time }) => {
  return (
    <Container width={width}>
      <Scene width={width} animation_time={animation_time}>
        <Front>
          <InnerCircle width={width}>₩</InnerCircle>
        </Front>
        <Back width={width}>
          <InnerCircle width={width}>₩</InnerCircle>
        </Back>
      </Scene>
    </Container>
  );
};

export default Coin;

const spin = keyframes`
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
`;

const Container = styled.div<PickWidth>`
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
`;

const CommonSceneStyle = css`
  background: linear-gradient(#caa245 0 40%, #bd8f40 40%);
  background-size: 100% 10px;
  height: 100%;
`;

const Scene = styled.div<Props>`
  ${CommonSceneStyle}
  transform-style: preserve-3d;
  width: 100%;
  position: relative;
  border-radius: 50%;

  &::before {
    ${CommonSceneStyle}
    content: "";
    position: absolute;
    width: 100%;
    border-radius: 50%;
    transform: translateZ(${({ width }) => -Math.floor(width / 20)}px);
  }

  &::after {
    ${CommonSceneStyle}
    content: "";
    position: absolute;
    left: 50%;
    width: ${({ width }) => Math.floor(width / 20)}px;
    transform: rotateY(90deg)
      translateX(${({ width }) => Math.floor(width / 40)}px);
  }

  animation: ${spin} ${({ animation_time }) => animation_time}s linear infinite;
`;

const CommonCircleStyle = css`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fcee50;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Front = styled.div`
  ${CommonCircleStyle}
  transform: translateZ(1px);
`;

const Back = styled.div<PickWidth>`
  ${CommonCircleStyle}
  transform: translateZ(${({ width }) => -Math.floor(width / 20) - 1}px);
`;

const InnerCircle = styled.div<PickWidth>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ width }) => Math.floor(width / 2)}px;
  width: calc(100% - ${({ width }) => Math.floor(width / 10)}px);
  height: calc(100% - ${({ width }) => Math.floor(width / 10)}px);
  border-radius: 50%;
  background-color: #fcee50;

  box-shadow: inset 0 ${({ width }) => Math.floor(width / 30)}px 0 #c08232,
    inset ${({ width }) => -Math.floor(width / 30)}px 0 0 #c08232,
    inset 0 ${({ width }) => -Math.floor(width / 30)}px 0 #c08232,
    inset ${({ width }) => Math.floor(width / 30)}px 0 0 #c08232,
    inset ${({ width }) => -Math.floor(width / 40)}px
      ${({ width }) => Math.floor(width / 40)}px 0 #c08232,
    inset ${({ width }) => -Math.floor(width / 40)}px
      ${({ width }) => -Math.floor(width / 40)}px 0 #c08232,
    inset ${({ width }) => Math.floor(width / 40)}px
      ${({ width }) => -Math.floor(width / 40)}px 0 #c08232,
    inset ${({ width }) => Math.floor(width / 40)}px
      ${({ width }) => Math.floor(width / 40)}px 0 #c08232;
`;
