import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import profile from "../../public/assets/profile.png";
import Drawer from "./Drawer";

interface Props {
  title: string;
  contents: string;
}

const App: React.FC<Props> = ({ title, contents }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <ImageStyle onClick={openDrawer}>
        <Image src={profile} alt="profile" />
      </ImageStyle>
      이미지를 클릭해보세요.
      <Drawer isOpen={isOpen} closeDrawer={closeDrawer} title={title}>
        {contents}
      </Drawer>
    </>
  );
};

export default App;

const ImageStyle = styled.div`
  width: 10vw;
  border-radius: 5%;
  overflow: hidden;
  cursor: pointer;
`;
