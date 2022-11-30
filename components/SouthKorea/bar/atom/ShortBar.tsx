import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  width: number;
  barMargin?: boolean;
}

type BarMarginPick = Pick<Props, "barMargin">;

interface StyleProps extends BarMarginPick {
  barWidth: number;
  barLength: number;
  barTerm: number;
}

const ShortBar: React.FC<Props> = ({ width, barMargin }) => {
  const [barWidth, setBarWidth] = useState<number>(0);
  const [barLength, setBarLength] = useState<number>(0);
  const [barTerm, setBarTerm] = useState<number>(0);

  const handleBarWidth = (width: number) => setBarWidth(Math.floor(width / 36));
  const handleBarLength = (width: number) =>
    setBarLength(Math.floor(width / 6));

  const handleBarTerm = (width: number) => setBarTerm(Math.floor(width / 72));

  useEffect(() => {
    handleBarWidth(width);
    handleBarLength(width);

    handleBarTerm(width);
  }, [width]);

  return (
    <Container
      barWidth={barWidth}
      barLength={barLength}
      barTerm={barTerm}
      barMargin={barMargin}
    >
      <Bar barWidth={barWidth} barLength={barLength} barTerm={barTerm} />
      <Bar barWidth={barWidth} barLength={barLength} barTerm={barTerm} />
    </Container>
  );
};

export default ShortBar;

const Container = styled.div<StyleProps>`
  width: ${({ barLength }) => barLength}px;
  height: ${({ barWidth }) => barWidth}px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: ${({ barMargin, barTerm }) => (barMargin ? `${barTerm}px` : 0)};
`;

const Bar = styled.div<StyleProps>`
  width: ${({ barLength, barTerm }) => Math.floor((barLength - barTerm) / 2)}px;
  height: ${({ barWidth }) => barWidth}px;
  background-color: black;
`;
