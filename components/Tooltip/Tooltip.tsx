import styled from "styled-components";
import React, { useRef, useState } from "react";
import getContentMargin from "./fnc/getContentMargin";
import getTopPosition from "./fnc/position/content/getTopPosition";
import getLeftPosition from "./fnc/position/content/getLeftPosition";
import getRightPosition from "./fnc/position/content/getRightPosition";
import getBottomPosition from "./fnc/position/content/getBottomPosition";
import getArrowTopPosition from "./fnc/position/arrow/getArrowTopPosition";
import getArrowLeftPosition from "./fnc/position/arrow/getArrowLeftPosition";
import getArrowRightPosition from "./fnc/position/arrow/getArrowRightPosition";
import getArrowBottomPosition from "./fnc/position/arrow/getArrowBottomPosition";

interface Props {
  text: string;
  placement: string;
  color: string;
  children: JSX.Element;
}

type PickProps = Pick<Props, "placement" | "text">;

interface StyleProps extends PickProps {
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
        text={text}
      >
        {text}
      </Content>
    </Container>
  );
};

export default Tooltip;

const Container = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div<StyleProps>`
  display: ${({ text }) => (text.length > 0 ? "block" : "none")};
  background-color: ${({ color }) => color};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  width: max-content;
  max-width: 250px;
  min-width: 32px;
  word-break: break-all;

  text-align: start;
  padding: 6px 8px;
  border-radius: 6px;
  margin: ${({ placement }) => getContentMargin(placement)};

  position: absolute;

  top: ${({ placement }) => getTopPosition(placement)};
  bottom: ${({ placement, containerEl }) =>
    getBottomPosition(placement, containerEl)};
  left: ${({ placement, containerEl }) =>
    getLeftPosition(placement, containerEl)};
  right: ${({ placement }) => getRightPosition(placement)};

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: ${({ placement, containerEl }) =>
      getArrowTopPosition(placement, containerEl)};
    left: ${({ placement, containerEl }) =>
      getArrowLeftPosition(placement, containerEl)};
    right: ${({ placement }) => getArrowRightPosition(placement)};
    bottom: ${({ placement }) => getArrowBottomPosition(placement)};
    width: 15px;
    height: 15px;
    background-color: ${({ color }) => color};
    transform: rotate(45deg);
  }
`;
