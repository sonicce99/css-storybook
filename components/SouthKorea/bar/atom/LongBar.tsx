import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  width: number;
  barMargin?: boolean;
}

interface StyleProps extends Props {
  barWidth: number;
  barLength: number;
}

const LongBar: React.FC<Props> = ({ width, barMargin }) => {
  const [barWidth, setBarWidth] = useState<number>(0);
  const [barLength, setBarLength] = useState<number>(0);

  const handleBarWidth = (width: number) => setBarWidth(Math.floor(width / 36));
  const handleBarLength = (width: number) =>
    setBarLength(Math.floor(width / 6));

  useEffect(() => {
    handleBarWidth(width);
    handleBarLength(width);
  }, [width]);

  return (
    <Bar
      barWidth={barWidth}
      barLength={barLength}
      barMargin={barMargin}
      width={width}
    />
  );
};

export default LongBar;

const Bar = styled.div<StyleProps>`
  width: ${({ barLength }) => barLength}px;
  height: ${({ barWidth }) => barWidth}px;
  background-color: black;

  margin-top: ${({ barMargin, width }) =>
    barMargin ? Math.floor(width / 72) : 0}px;
`;
