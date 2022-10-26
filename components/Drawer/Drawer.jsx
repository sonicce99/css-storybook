import Image from "next/image";
import React from "react";
import styled from "styled-components";
import closeIcon from "../../public/assets/close.svg";

const Drawer = ({ isOpen, closeDrawer, children }) => {
  return (
    <Container>
      <DrawerOutside onClick={closeDrawer} isOpen={isOpen} />
      <DrawerContent isOpen={isOpen}>
        <DrawerHeader>
          <DrawerTitle>Header</DrawerTitle>
          <CloseBtn onClick={closeDrawer}>
            <Image src={closeIcon} alt="closeIcon" />
          </CloseBtn>
        </DrawerHeader>

        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Container>
  );
};

export default Drawer;

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const DrawerOutside = styled(Container)`
  height: ${({ isOpen }) => (isOpen ? "100vh" : 0)};
  background-color: ${({ isOpen }) => (isOpen ? "#112118" : "black")};
  opacity: 0.5;
`;

const DrawerContent = styled(Container)`
  bottom: 0;
  right: 0;
  width: ${({ isOpen }) => (isOpen ? "500px" : 0)};
  height: 100vh;
  background-color: #ffffff;
  transition: width 1s;
  box-shadow: -1px 0px 5px 5px rgba(72, 122, 180, 0.7);
  overflow: auto;
  opacity: 1;
  color: black;
`;

const DrawerHeader = styled.div`
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DrawerTitle = styled.div`
  padding: 17px 24px 16px 24px;
`;

const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
`;

const DrawerBody = styled.div`
  padding: 24px;
`;
