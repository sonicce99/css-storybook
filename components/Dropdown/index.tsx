import Image from "next/image";
import Dropdown from "./Dropdown";
import styled from "styled-components";
import React, { ReactNode, useMemo, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaPizzaSlice } from "react-icons/fa";
import { GiChickenOven } from "react-icons/gi";
import { AiFillLinkedin } from "react-icons/ai";
import bird from "../../public/assets/bird.png";

export interface HeaderProps {
  title: string;
  subTitle: string;
}

export interface ItemProps {
  label: ReactNode;
  key: string;
  icon?: ReactNode;
}

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = () => setIsOpen((prev) => !prev);

  const header: HeaderProps = {
    title: "이동수",
    subTitle: "Front-end Developer",
  };

  const items: ItemProps[] = useMemo(
    () => [
      {
        label: <a href="https://github.com/sonicce99">My Github</a>,
        key: "0",
        icon: <BsGithub size={30} />,
      },
      {
        label: (
          <a href="https://www.linkedin.com/in/%EB%8F%99%EC%88%98-%EC%9D%B4-b312a8238/">
            My LinkedIn
          </a>
        ),
        key: "1",
        icon: <AiFillLinkedin size={30} />,
      },
      {
        label: <a href="https://pji.co.kr/w_main">My Love 파파존스</a>,
        key: "2",
        icon: <FaPizzaSlice size={25} />,
      },
      {
        label: <a href="https://www.bbq.co.kr/main.asp">My Love 황금올리브</a>,
        key: "3",
        icon: <GiChickenOven size={25} />,
      },
    ],
    []
  );

  return (
    <Dropdown header={header} items={items} isOpen={isOpen}>
      <Flex>
        <Text>앵그리버드를 클릭해보세요! 👋🏻</Text>
        <ImageStyle onClick={handleIsOpen}>
          <Image src={bird} alt="birdImage" />
        </ImageStyle>
      </Flex>
    </Dropdown>
  );
};

export default App;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  font-size: 30px;
`;

const ImageStyle = styled.div`
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;
