import React from "react";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { BiBed } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
import wifi from "../public/assets/wifi.svg";
import battery from "../public/assets/battery.svg";
import cellular from "../public/assets/cellular.svg";

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn((prev) => !prev);

  return (
    <Container>
      <Inner>
        <Header>
          <CurrTime>11:11</CurrTime>
          <FlexBox spaceAround>
            <Image width={35} height={35} src={cellular} alt="cellular" />
            <Image width={35} height={35} src={wifi} alt="wifi" />
            <Image width={35} height={35} src={battery} alt="battery" />
          </FlexBox>
        </Header>

        <FlexBox spaceBetween>
          <YellowFontStyle>편집</YellowFontStyle>
          <HiPlus size="40px" color="#d69035" />
        </FlexBox>

        <Title>알람</Title>

        <FlexBox>
          <BiBed size="30px" />
          <SubTitle>수면</SubTitle>
          <SubTitle className="after">기상</SubTitle>
        </FlexBox>

        <Divider />

        <FlexBox spaceBetween>
          <Alerm>알림 없음</Alerm>
          <Setting>
            <YellowFontStyle>설정</YellowFontStyle>
          </Setting>
        </FlexBox>

        <Divider />

        <SubTitle>기타</SubTitle>

        <Divider />

        <FlexBox spaceBetween>
          <FlexBox>
            <AMPM isOn={isOn}>오전</AMPM>
            <Time isOn={isOn}>6:50</Time>
          </FlexBox>
          <SwitchOuter isOn={isOn} onClick={toggleSwitch}>
            <SwitchInner isOn={isOn} />
          </SwitchOuter>
        </FlexBox>

        <Divider />
      </Inner>
    </Container>
  );
};

export default Switch;

const Container = styled.div`
  width: 700px;
  margin: 0 auto;
`;

const Inner = styled.div`
  padding: 20px;
`;

const Header = styled.header`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CurrTime = styled.div`
  font-size: 40px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.spaceBetween
      ? "space-between"
      : props.spaceAround
      ? "space-around"
      : "start"};
  align-items: ${(props) => props.end || "center"};
`;

const YellowFontStyle = styled.div`
  color: #d69035;
  font-size: 30px;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const SubTitle = styled.h2`
  font-size: 40px;

  &.after {
    &::before {
      content: "|";
      margin: 0 5px;
    }
  }
`;

const Divider = styled.div`
  border: 1px solid #201f21;
`;

const Alerm = styled.p`
  color: #86868b;
  font-size: 30px;
`;

const Setting = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 50px;
  background-color: #272628;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AMPM = styled.p`
  font-size: 60px;
  color: ${(props) => (props.isOn ? "#ffffff" : "#8d8d92")};
`;

const Time = styled.p`
  font-size: 120px;
  color: ${(props) => (props.isOn ? "#ffffff" : "#8d8d92")};
`;

const SwitchOuter = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 150px;
  background-color: ${(props) => (props.isOn ? "#69cd67" : "#272629")};
  padding: 4px;
`;

const SwitchInner = styled.div`
  width: 42px;
  height: 42px;
  background-color: #ffffff;
  border-radius: 50%;
  transform: translateX(${(props) => (props.isOn ? "50px" : "0px")});
`;
