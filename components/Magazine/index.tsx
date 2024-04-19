import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  text: string;
}

const Advertisement: React.FC<Props> = ({ text }) => {
  const array = text.split(" ");

  return (
    <Container>
      {array.map((el, index) => {
        const delay = index * 0.1;
        return <Content delay={delay}>{el}</Content>;
      })}
    </Container>
  );
};

export default Advertisement;

const opacity = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const Container = styled.div`
  width: 400px;
  height: 600px;

  display: flex;
  flex-direction: column;

  flex-wrap: wrap;
  border: 3px solid white;
`;

const Content = styled.div<{ delay: number }>`
  width: 199px;
  height: 49px;
  font-size: 25px;
  opacity: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${opacity} 0.5ms forwards ${({ delay }) => `${delay}s`};
`;
