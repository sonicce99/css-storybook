import React from "react";
import styled from "styled-components";
import Tooltip from "./Tooltip";

interface Props {
  text: string;
  buttonText: string;
  backgroundColor: string;
  placement: string;
}

const App: React.FC<Props> = ({
  text,
  buttonText,
  backgroundColor,
  placement,
}) => {
  return (
    <Container>
      <Tooltip text={text} placement={placement} color={backgroundColor}>
        <Button>{buttonText}</Button>
      </Tooltip>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50vh;
`;

const Button = styled.button`
  background-color: #fff;
  box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
  color: black;

  font-size: 14px;
  height: 32px;
  padding: 4px 15px;
  border-radius: 6px;
`;
