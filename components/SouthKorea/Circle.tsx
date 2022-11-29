import React from "react";
import styled from "styled-components";

interface Props {
  width: number;
}

const Circle: React.FC<Props> = ({ width }) => {
  return (
    <Container width={width}>
      <BigRed width={width} />
      <BigBlue width={width} />

      <SmallCircle width={width}>
        <SmallBlue width={width} />
        <SmallRed width={width} />
      </SmallCircle>
    </Container>
  );
};

export default Circle;

const Container = styled.div<Props>`
  width: ${({ width }) => width / 3}px;
  height: ${({ width }) => width / 3}px;
  position: relative;
`;

const BigRed = styled.div<Props>`
  border-radius: 100px 0 0 100px;
  transform-origin: right;
  transform: rotate(120deg);
  background-color: #d0303b;
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => width / 3 / 2}px;
  height: ${({ width }) => width / 3}px;
`;

const BigBlue = styled.div<Props>`
  border-radius: 0 100px 100px 0;
  transform-origin: left;
  transform: rotate(120deg);
  background-color: #134b9e;
  position: absolute;
  top: 0;
  right: 0;
  width: ${({ width }) => width / 3 / 2}px;
  height: ${({ width }) => width / 3}px;
`;

const SmallCircle = styled.div<Props>`
  width: ${({ width }) => width / 3 / 2}px;
  height: ${({ width }) => width / 3}px;
  position: relative;
  transform: rotate(120deg);
  top: 0;
  left: 50px;
`;

const SmallRed = styled.div<Props>`
  background-color: #d0303b;
  width: ${({ width }) => width / 3 / 2}px;
  height: ${({ width }) => width / 3 / 2}px;
  border-radius: 50%;

  position: absolute;
  bottom: 0;
  left: 0;
`;

const SmallBlue = styled.div<Props>`
  background-color: #134b9e;
  width: ${({ width }) => width / 3 / 2}px;
  height: ${({ width }) => width / 3 / 2}px;
  border-radius: 50%;

  position: absolute;
  top: 0;
  right: 0;
`;
