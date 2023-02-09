import React from "react";
import styled from "styled-components";
import LeagueOfLegend from "./LeagueOfLegend";

const App = () => {
  return (
    <Container>
      <LeagueOfLegend />
    </Container>
  );
};

export default App;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
