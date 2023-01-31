import React from "react";
import styled, { keyframes } from "styled-components";

const Barbershop = () => {
  return (
    <Container>
      <Pedestal />
      <BeamBox>
        <Beam />
      </BeamBox>
      <Pedestal />
    </Container>
  );
};

export default Barbershop;

const stripes = keyframes`
    from {
        background-position: 0 0;
    }

    to {
        background-position: 600px 0;
    }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BeamBox = styled.div`
  width: 150px;
  height: 500px;
  overflow: hidden;
`;

const Pedestal = styled.div`
  width: 170px;
  height: 30px;
  background-color: brown;
`;

const Beam = styled.div`
  width: 600px;
  height: 100%;
  background-image: linear-gradient(
    132deg,
    white 0 14.28%,
    red 14.28% 28.56%,
    white 28.56% 42.84%,
    blue 42.84% 57.12%,
    white 57.12% 71.4%,
    red 71.4% 85.68%,
    white 85.68% 100%
  );
  animation: ${stripes} 5s linear infinite;
`;
