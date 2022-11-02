import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { HeaderProps, ItemProps } from ".";

export interface Props {
  children: ReactNode;
  header: HeaderProps;
  items: ItemProps[];
  isOpen: boolean;
}

interface MenuProps {
  isOpen: boolean;
}

const Dropdown: React.FC<Props> = ({ children, header, items, isOpen }) => {
  return (
    <Container>
      {children}

      <Menu isOpen={isOpen}>
        <Introduce>
          <Title>{header.title}</Title>
          <SubTitle>{header.subTitle}</SubTitle>
        </Introduce>
        <Ul>
          {items.map((el) => {
            const { label, key, icon } = el;
            return (
              <Li key={key}>
                <Flex>
                  <Icon>{icon}</Icon>
                  {label}
                </Flex>
              </Li>
            );
          })}
        </Ul>
      </Menu>
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  position: fixed;
  right: 35px;
`;

const Menu = styled.nav<MenuProps>`
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  position: absolute;
  width: 220px;
  right: 0px;

  background-color: black;
  color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);

  transition: opacity 0.5s;

  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};

  @media (prefers-color-scheme: dark) {
    & {
      background-color: #ffffff;
      color: black;
    }
  }
`;

const Introduce = styled.div`
  text-align: center;
`;

const Title = styled.h3``;

const SubTitle = styled.h5`
  color: #8f9794;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Icon = styled.div`
  margin-right: 15px;
  opacity: 0.25;
`;

const Li = styled.li`
  color: #333333;
  padding: 10px 15px;
  border-top: 1px solid #dddddd;

  &:hover {
    ${Icon} {
      opacity: 1;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;
