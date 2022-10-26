import React from "react";
import styled, { keyframes } from "styled-components";

const Loader = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default Loader;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -75px;
  margin-left: -75px;
`;

const Spinner = styled.div`
  width: 150px;
  height: 150px;
  border: 15px solid rgba(255, 255, 255, 0.2);
  border-top: 15px solid #ffffff;
  animation: ${spin} 1.1s infinite linear;
  border-radius: 50%;
`;
