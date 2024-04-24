import React from "react";
import styled, { keyframes } from "styled-components";
import newyork from "../../public/assets/newyork.jpg";

interface Props {
  text: string;
  showBorder: boolean;
}

const Advertisement: React.FC<Props> = ({ text, showBorder }) => {
  const array = text.split(" ");

  return (
    <Container>
      {array.map((el, index) => {
        const delay = index * 0.1;

        {
          return el === "BUTTON" ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button delay={delay}>#뉴욕</Button>
            </div>
          ) : (
            <Content
              key={index}
              index={index}
              delay={delay}
              showBorder={showBorder}
            >
              {el}
            </Content>
          );
        }
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

  border: 3px solid white;
  background-image: url(${newyork.src});
`;

const Content = styled.div<{
  index: number;
  delay: number;
  showBorder: boolean;
}>`
  width: 100%;
  height: 49.5px;
  font-size: 40px;
  opacity: 0;

  display: flex;
  justify-content: ${({ index }) => (index < 5 ? "start" : "end")};
  align-items: center;

  animation: ${opacity} 0.5ms forwards ${({ delay }) => `${delay}s`};
  border: ${({ showBorder }) => (showBorder ? "1px solid green" : "none")};
`;

const Button = styled.button<{ delay: number }>`
  padding: 10px 16px;
  background-color: white;
  border: none;
  color: black;
  opacity: 0;
  font-size: 20px;
  border-radius: 50px;
  cursor: pointer;

  animation: ${opacity} 0.5ms forwards ${({ delay }) => `${delay}s`};
`;
