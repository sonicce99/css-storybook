import React from "react";
import styled from "styled-components";
import Tooltip from "./Tooltip";

interface Props {
  text: string;
  backgroundColor: string;
}

const App: React.FC<Props> = ({ text }) => {
  return (
    <Container>
      <Flex>
        <Tooltip text={text} placement="topLeft" color="pink">
          <Button>TL</Button>
        </Tooltip>

        <Tooltip text={text} placement="top" color="red">
          <Button>Top</Button>
        </Tooltip>

        <Tooltip text={text} placement="topRight" color="yellowgreen">
          <Button>TR</Button>
        </Tooltip>
      </Flex>

      <Between>
        <FlexReverse>
          <Tooltip text={text} placement="leftTop" color="orange">
            <Button>LT</Button>
          </Tooltip>

          <Tooltip text={text} placement="left" color="#28bdb3">
            <Button>Left</Button>
          </Tooltip>

          <Tooltip text={text} placement="leftBottom" color="green">
            <Button>LB</Button>
          </Tooltip>
        </FlexReverse>

        <FlexReverse>
          <Tooltip text={text} placement="rightTop" color="blue">
            <Button>RT</Button>
          </Tooltip>

          <Tooltip text={text} placement="right" color="purple">
            <Button>Right</Button>
          </Tooltip>

          <Tooltip text={text} placement="rightBottom" color="royalblue">
            <Button>RB</Button>
          </Tooltip>
        </FlexReverse>
      </Between>

      <Flex>
        <Tooltip text={text} placement="bottomLeft" color="magenta">
          <Button>BL</Button>
        </Tooltip>

        <Tooltip text={text} placement="bottom" color="chocolate">
          <Button>Bottom</Button>
        </Tooltip>

        <Tooltip text={text} placement="bottomRight" color="gold">
          <Button>BR</Button>
        </Tooltip>
      </Flex>
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: calc(50vw - 250px);
  margin-top: calc(50vh - 90px);
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 320px;
`;

const FlexReverse = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Between = styled.div`
  width: 420px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: #fff;
  box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
  color: black;

  font-size: 14px;
  min-width: 70px;
  height: 32px;
  padding: 4px 15px;
  border-radius: 6px;

  transition: 0.5s;

  &:hover {
    color: hotpink;
    background: cyan;
    box-shadow: 0 0 0 4px black, 0 0 0 6px cyan;
  }
`;
