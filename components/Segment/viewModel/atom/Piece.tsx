import React from "react";
import styled from "styled-components";

interface Props {
  vertical?: boolean;
  on?: boolean;
}

type On = Pick<Props, "on">;

const Piece: React.FC<Props> = ({ vertical, on }) => {
  return (
    <Container vertical={vertical}>
      <LeftTriangle on={on} />
      <MiddleBox on={on} />
      <RightTriangle on={on} />
    </Container>
  );
};

export default Piece;

const Container = styled.div<Props>`
  width: 150px;
  height: 26px;

  transform: rotate(${({ vertical }) => (vertical ? "90deg" : 0)});

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftTriangle = styled.div<On>`
  border-right: 13px solid ${({ on }) => (on ? "red" : "#323232")};
  border-top: 13px solid transparent;
  border-bottom: 13px solid transparent;

  width: 0;
  height: 0;
`;

const MiddleBox = styled.div<On>`
  width: 125px;
  height: inherit;
  background-color: ${({ on }) => (on ? "red" : "#323232")};
`;

const RightTriangle = styled.div<On>`
  border-left: 13px solid ${({ on }) => (on ? "red" : "#323232")};
  border-top: 13px solid transparent;
  border-bottom: 13px solid transparent;

  width: 0;
  height: 0;
`;
