import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  viewers: number;
}

const App: React.FC<Props> = ({ viewers }) => {
  return (
    <Atag>
      <Container>
        <OnAir />

        <Text>{viewers}만 시청</Text>
      </Container>
    </Atag>
  );
};

export default App;

const Atag = styled.a.attrs({
  href: "https://shoppinglive.naver.com/home",
  target: "_blank",
  rel: "noreferrer",
})``;

const Container = styled.div`
  position: absolute;
  top: calc(50% - 28px);
  left: calc(50% - 100px);
  border-radius: 25px;

  height: 55px;
  background-color: #a29d99;
`;

const ani = keyframes`
    from {
      background-position: top;
    }

    to {
      background-position: bottom;
    }
`;

const OnAir = styled.span`
  display: inline-block;
  background-size: 100% 30000%;

  width: 100px;
  height: 55px;

  background-image: url("https://im.pstatic.net/selective/img/sprite/sp_livebadge2_pc.png");
  animation: ${ani} 5s steps(299) infinite;
  background-repeat: no-repeat;

  border-radius: 25px;
`;

const Text = styled.span`
  padding: 0 8px 0 5px;
  font-size: 30px;
  line-height: 1.85;
  vertical-align: top;
  font-weight: 500;
`;
