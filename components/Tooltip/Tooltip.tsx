import React, { ReactNode, useRef, useState } from "react";
import styled from "styled-components";
import getBottomPosition from "./position/getBottomPosition";
import getLeftPosition from "./position/getLeftPosition";
import getRightPosition from "./position/getRightPosition";

interface Props {
  text: ReactNode;
  placement: string;
  color: string;
  children: JSX.Element;
}

type Placement = Pick<Props, "placement">;

interface StyleProps extends Placement {
  isVisible: boolean;
  containerEl: React.RefObject<HTMLDivElement>;
}

const Tooltip: React.FC<Props> = ({ text, placement, color, children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const containerEl = useRef<HTMLDivElement>(null);

  const onTooltip = () => setIsVisible(true);
  const offTooltip = () => setIsVisible(false);

  return (
    <Container
      onMouseOver={onTooltip}
      onMouseOut={offTooltip}
      ref={containerEl}
    >
      {children}

      <Content
        isVisible={isVisible}
        placement={placement}
        color={color}
        containerEl={containerEl}
      >
        {text}
      </Content>
    </Container>
  );
};

export default Tooltip;

const Container = styled.span`
  position: relative;
`;

const Content = styled.div<StyleProps>`
  background-color: ${({ color }) => color};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  text-align: start;
  word-wrap: break-word;
  padding: 6px 8px;
  border-radius: 6px;

  position: absolute;

  bottom: ${({ placement, containerEl }) =>
    getBottomPosition(placement, containerEl)};

  left: ${({ placement, containerEl }) =>
    getLeftPosition(placement, containerEl)};

  right: ${({ placement }) => getRightPosition(placement)}; ;
`;
