import React from "react";
import styled, { keyframes } from "styled-components";

interface ContainerProps {
  radius: number;
}

interface TextProps extends ContainerProps {
  index: number;
  textWidth: number;
}

const App = () => {
  const text = "Hi! My name is Dong Su Lee. I'm Web Front Developer.";
  const radius = 200;
  const textWidth = 30;

  return (
    <Container radius={radius}>
      {text.split("").map((string, index) => {
        return (
          <Text radius={radius} index={index} textWidth={textWidth}>
            {string}
          </Text>
        );
      })}
    </Container>
  );
};

export default App;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Container = styled.div<ContainerProps>`
  position: relative;
  top: 50vh;
  left: 50%;
  margin-top: ${({ radius }) => -radius}px;
  margin-left: ${({ radius }) => -radius}px;

  width: ${({ radius }) => 2 * radius}px;
  height: ${({ radius }) => 2 * radius}px;

  animation: ${rotate} 10s infinite ease-in-out;
`;

const Text = styled.span<TextProps>`
  font-size: 30px;
  text-align: center;
  width: ${({ textWidth }) => textWidth}px;
  height: ${({ radius }) => `${radius}px`};
  position: absolute;
  left: ${({ radius, textWidth }) => radius - textWidth / 2}px;
  transform-origin: bottom center;
  transform: rotate(${({ index }) => 6 * (index + 1)}deg);
`;
