import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SegmentClass from "./segment";
import Segment from "./viewModel/Segment";

interface Props {
  number: number;
}

const App: React.FC<Props> = ({ number }) => {
  const [splited, setSplited] = useState<string[]>(String(number).split(""));
  const [hundred, setHundred] = useState<number>(0);
  const [ten, setTen] = useState<number>(0);
  const [one, setOne] = useState<number>(0);

  useEffect(() => {
    handleSplited(String(number).split(""));
  }, [number]);

  useEffect(() => {
    if (splited.length === 3) {
      handleHundred(splited[0]);
      handleTen(splited[1]);
      handleOne(splited[2]);
    } else if (splited.length === 2) {
      handleHundred("0");
      handleTen(splited[0]);
      handleOne(splited[1]);
    } else {
      handleHundred("0");
      handleTen("0");
      handleOne(splited[0]);
    }
  }, [splited]);

  const handleSplited = (value: string[]) => setSplited(value);

  const handleHundred = (value: string) => setHundred(Number(value));
  const handleTen = (value: string) => setTen(Number(value));
  const handleOne = (value: string) => setOne(Number(value));

  let segmentObj1 = new SegmentClass();
  segmentObj1.setNumber(hundred);

  let segmentObj2 = new SegmentClass();
  segmentObj2.setNumber(ten);

  let segmentObj3 = new SegmentClass();
  segmentObj3.setNumber(one);

  return (
    <Container>
      <Box>
        <Segment segment={segmentObj1} />
        <Segment segment={segmentObj2} />
        <Segment segment={segmentObj3} />
      </Box>
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 625px;
  height: 400px;

  display: inherit;
  justify-content: inherit;
  align-items: inherit;
`;
