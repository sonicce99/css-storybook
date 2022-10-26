import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import profile from "../../public/assets/profile.png";
import Drawer from "./Drawer";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <ImageStyle onClick={openDrawer}>
        <Image src={profile} alt="profile" />
      </ImageStyle>

      <Drawer isOpen={isOpen} closeDrawer={closeDrawer}>
        asdasdashjdgasjhdagsdjhagsdjhas
      </Drawer>
    </>
  );
};

export default App;

const ImageStyle = styled.div`
  width: 5vw;
  border-radius: 5%;
  overflow: hidden;
  cursor: pointer;
`;
