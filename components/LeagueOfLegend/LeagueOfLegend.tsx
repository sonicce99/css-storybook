import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import joy from "../../public/assets/joy.jpg";
import jayce from "../../public/assets/jayce.jpeg";
import { MdOutlineMoveToInbox } from "react-icons/md";
import useInterval from "./fnc/useInterval";

interface StyleProps {
  index: number;
}

interface ProgressBarProps {
  time: number;
  reverse?: boolean;
}

const LeagueOfLegend = () => {
  const [time, setTime] = useState<number>(60);

  const reduceTime = () => setTime((prev) => --prev);
  const resetTime = () => setTime(60);

  useInterval(time, reduceTime, resetTime, 1000);

  return (
    <Container>
      <Header>
        <ChampionZone>
          <Text>사용 가능한 챔피언</Text>
          <ChampionList>
            {new Array(10).fill(null).map((_, index) => {
              return <ChampionBox index={index} key={index} />;
            })}
          </ChampionList>
          <MdOutlineMoveToInbox color="#cdbe91" size="25px" />
        </ChampionZone>
        <TimeZone>
          <ProgressBar reverse time={time} />
          <Time>{time}</Time>
          <ProgressBar time={time} />
        </TimeZone>
      </Header>
      <Middle>
        <Circle>
          <MovingLines>
            {new Array(300).fill(null).map((_, index) => {
              return <Line key={index} index={index} />;
            })}
          </MovingLines>
        </Circle>
      </Middle>
    </Container>
  );
};

export default LeagueOfLegend;

const Container = styled.div`
  position: absolute;
  padding: 0px 250px 0px 250px;
  width: 1215px;
  height: 715px;
  background-image: url(${joy.src});
  background-size: cover;
  background-clip: content-box;
  border-radius: 50%;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: inherit;
    background-size: inherit;
    filter: blur(5px);
  }
`;

const Header = styled.div`
  position: absolute;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100px;
`;

const ChampionZone = styled.div`
  width: calc(100% - 135px);
  height: 60px;

  display: flex;
  margin-left: 135px;
  align-items: center;
`;

const Text = styled.p`
  color: #888679;
  font-size: 15px;
`;

const ChampionList = styled.div`
  width: 640px;
  margin: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChampionBox = styled.div<StyleProps>`
  width: 55px;
  height: 55px;
  background: url(${({ index }) => (index === 0 ? jayce.src : null)});
  background-color: ${({ index }) => (index === 0 ? null : "#282828")};
  background-size: cover;
  border: 1px solid #1e1e1e;
  border-radius: 2px;
  opacity: ${({ index }) => (index === 0 ? 1 : 0.5)};
  cursor: ${({ index }) => (index === 0 ? "pointer" : "default")};
`;

const TimeZone = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Time = styled.div`
  width: 60px;
  height: 60px;
  margin: 3px 15px;
  text-shadow: 1px 1px 10px #363333;
  color: #f0e6d4;
  font-size: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressBar = styled.div<ProgressBarProps>`
  width: 275px;
  height: 7px;
  border: 1px solid #282828;
  border-radius: 1px;
  transform: rotate(${({ reverse }) => (reverse ? "180deg" : "0deg")});
  background: #414040;

  &::before {
    content: "";
    display: block;
    width: ${({ time }) => `${Math.floor((time * 100) / 60)}%`};
    transition: 1.5s;
    height: inherit;
    background: linear-gradient(to left, #255a7f, #82c8d0);
    opacity: 1;
    box-shadow: 0 0 10px #d2d4cb;
  }
`;

const Middle = styled.div`
  position: absolute;
  top: 100px;
  right: 0;
  left: 0;
  bottom: 150px;
  width: 100%;
  height: 465px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  position: relative;
  border: 2px solid #d8b66e;
  width: 715px;
  height: 715px;
  margin-top: 50px;
  border-radius: 50%;
  box-shadow: 1px 1px 1px black inset, -1px -1px 1px black inset;

  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    display: block;
    width: calc(100% - 25px);
    height: calc(100% - 25px);
    border: 5px solid #d8b66e;
    border-radius: inherit;
    box-shadow: inherit;
  }
`;

const spin = keyframes`
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
`;

const MovingLines = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  width: calc(100% - (30px * 2));
  height: calc(100% - (30px * 2));
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${spin} 60s linear infinite;
`;

const Line = styled.div<StyleProps>`
  position: absolute;
  width: 1px;
  height: 20px;
  border: 1px solid #87877d;
  transform: rotate(${({ index }) => 1.2 * index}deg) translateY(315px);
`;
