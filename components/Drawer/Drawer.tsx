import Image from "next/image";
import React, { ReactNode } from "react";
import styled from "styled-components";
import closeIcon from "../../public/assets/close.svg";

interface Props {
  isOpen: boolean;
  closeDrawer: () => void;
  title: ReactNode;
  children: ReactNode;
}

const Drawer: React.FC<Props> = ({ isOpen, closeDrawer, title, children }) => {
  return (
    <Container>
      <DrawerOutside onClick={closeDrawer} isOpen={isOpen} />
      <DrawerContent isOpen={isOpen}>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
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

interface StyledProps {
  isOpen: boolean;
}

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const DrawerOutside = styled(Container)<StyledProps>`
  height: ${({ isOpen }) => (isOpen ? "100vh" : 0)};
  background-color: ${({ isOpen }) => (isOpen ? "#112118" : "black")};
  opacity: 0.5;
`;

const DrawerContent = styled(Container)<StyledProps>`
  bottom: 0;
  right: 0;
  transform: translateX(${({ isOpen }) => (isOpen ? 0 : "100%")});
  transition: -webkit-transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
  width: 500px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: -2px 0 8px rgba(224, 4, 4, 1);
  opacity: 1;
  color: black;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

const DrawerHeader = styled.div`
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DrawerTitle = styled.div`
  padding: 17px 24px 16px 24px;
  width: 452px;
  word-wrap: break-word;
`;

const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const DrawerBody = styled.div`
  padding: 24px;
`;
