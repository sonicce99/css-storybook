import React from "react";
import styled from "styled-components";
import Piece from "./atom/Piece";
import SegmentClass from "../segment";

interface Props {
  segment: SegmentClass;
}

const Segment: React.FC<Props> = ({ segment }) => {
  return (
    <Container>
      <Top>
        <Piece on={segment.top} />
      </Top>
      <LeftTop>
        <Piece vertical on={segment.left_top} />
      </LeftTop>
      <RightTop>
        <Piece vertical on={segment.right_top} />
      </RightTop>
      <Middle>
        <Piece on={segment.middle} />
      </Middle>
      <LeftBottom>
        <Piece vertical on={segment.left_buttom} />
      </LeftBottom>
      <RightBottom>
        <Piece vertical on={segment.right_buttom} />
      </RightBottom>
      <Bottom>
        <Piece on={segment.buttom} />
      </Bottom>
    </Container>
  );
};

export default Segment;

const Container = styled.span`
  display: inline-block;
  position: relative;
  width: 150px;
  height: 355px;
  margin: 0 30px;
`;

const Top = styled.span`
  position: absolute;
  top: 0;
`;

const LeftTop = styled.span`
  position: absolute;
  top: 80px;
  left: -75px;
`;

const RightTop = styled.span`
  position: absolute;
  top: 80px;
  right: -75px;
`;

const Middle = styled.span`
  position: absolute;
  top: 160px;
`;

const LeftBottom = styled.span`
  position: absolute;
  top: 240px;
  left: -75px;
`;

const RightBottom = styled.span`
  position: absolute;
  top: 240px;
  right: -75px;
`;

const Bottom = styled.span`
  position: absolute;
  bottom: 10px;
`;
