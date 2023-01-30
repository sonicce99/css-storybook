import styled from "styled-components";
import Cylinder from "./Cylinder";

interface Props {
  radius: number;
  faceCount: number;
  rotateX: number;
}

type StyleProps = Pick<Props, "radius">;

const App: React.FC<Props> = ({ radius, faceCount, rotateX }) => {
  return (
    <Container radius={radius}>
      <Cylinder radius={radius} faceCount={faceCount} rotateX={rotateX} />
    </Container>
  );
};

export default App;

const Container = styled.div<StyleProps>`
  position: absolute;
  top: 50vh;
  left: 50vw;
  margin-left: ${({ radius }) => -radius}px;
  margin-top: ${({ radius }) => {
    const height = 3 * radius;
    return `-${Math.floor(height / 2)}px`;
  }};
`;
