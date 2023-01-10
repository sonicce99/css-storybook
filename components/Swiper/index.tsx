import React from "react";
import Swiper from "./Swiper";
import SwiperSlide from "./SwiperSlide";
import swiper1 from "../../public/assets/swiper1.jpg";
import swiper2 from "../../public/assets/swiper2.jpg";
import swiper3 from "../../public/assets/swiper3.jpg";
import swiper4 from "../../public/assets/swiper4.jpg";
import Image from "next/image";
import styled from "styled-components";

interface Props {
  navigation: boolean;
  pagination: boolean;
  autoplay: boolean;
  delay: number;
}

const App: React.FC<Props> = ({ navigation, pagination, autoplay, delay }) => {
  return (
    <Container>
      <Swiper
        navigation={navigation}
        pagination={pagination}
        autoplay={autoplay}
        delay={delay}
      >
        <SwiperSlide>
          <Image src={swiper1} alt="swiper1" draggable={false} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={swiper2} alt="swiper2" draggable={false} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={swiper3} alt="swiper3" draggable={false} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={swiper4} alt="swiper4" draggable={false} />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default App;

const Container = styled.div`
  margin: 0 auto;
  margin-top: calc(50vh - 213px);

  width: 640px;
  position: relative;
`;
