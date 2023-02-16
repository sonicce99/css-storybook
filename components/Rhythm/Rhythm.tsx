import React from "react";
import styled, { css, keyframes } from "styled-components";

const Rhythm = () => {
  return (
    <Scene>
      <OuterBox />
      <InnerBox />
    </Scene>
  );
};

export default Rhythm;

const Scene = styled.div`
  position: relative;
  width: 300px;
  height: 300px;

  transform-style: preserve-3d;
  transform: rotateX(45deg) rotateY(30deg);

  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
`;

const outBoxAni = keyframes`
    25% {
        width: 200px;
        height: 200px;
        transform: translateZ(0);        
    }

    50% {
        width: 200px;
        height: 200px;
        transform: translateZ(150px);
    }

    75% {
        width: 100%;
        height: 100%;
        transform: translateZ(150px);
    }

    100% {
        transform: translateZ(0);
    }
`;

const innerBoxAni = keyframes`
    25% {
        width: 100%;
        height: 100%;
        transform: translateZ(150px);
    }

    50% {
        width: 100%;
        height: 100%;
        transform: translateZ(0);
    }

    75% {
        width: 200px;
        height: 200px;
        transform: translateZ(0);
    }

    100% {
        width: 200px;
        height: 200px;
        transform: translateZ(150px);
    }    
`;

const CommonBoxStyle = css`
  position: absolute;
  border: 30px solid transparent;
  border-radius: 20%;
  background-image: linear-gradient(#000000, #000000),
    linear-gradient(to right, #7c3f94 0%, #ff00d4 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: -1px 1px 3px black, -1px 1px 3px black inset;
`;

const OuterBox = styled.div`
  ${CommonBoxStyle}
  width: 100%;
  height: 100%;

  animation: ${outBoxAni} 3s infinite;
`;

const InnerBox = styled.div`
  ${CommonBoxStyle}
  width: 200px;
  height: 200px;
  transform: translateZ(150px);

  animation: ${innerBoxAni} 3s infinite;
`;
