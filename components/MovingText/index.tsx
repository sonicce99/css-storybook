import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  text: string;
  radius: number;
  backgroundColor: string;
}

type ContainerProps = Pick<Props, "radius">;

interface TextProps extends ContainerProps {
  index: number;
  backgroundColor: string;
}

const App: React.FC<Props> = ({ radius, text, backgroundColor }) => {
  return (
    <Container radius={radius}>
      {text.split("").map((string, index) => {
        return (
          <Text
            key={string}
            radius={radius}
            index={index}
            backgroundColor={backgroundColor}
          >
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
  color: ${({ backgroundColor }) => backgroundColor};
  text-align: center;
  width: 30px;
  height: ${({ radius }) => `${radius}px`};
  position: absolute;
  left: ${({ radius }) => radius - 30 / 2}px;
  transform-origin: bottom center;
  transform: rotate(${({ index }) => 6 * (index + 1)}deg);
`;
