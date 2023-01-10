import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const SwiperSlide: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default SwiperSlide;

const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  flex-shrink: 0;

  position: relative;
  left: 0;
  transition: left 0.15s;
`;
