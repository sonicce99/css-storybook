import React, {
  MouseEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import useInterval from "./hooks/useInterval";

interface Props {
  navigation?: boolean;
  pagination?: boolean;
  children: ReactNode[];
  autoplay: boolean;
  delay: number;
}

interface StyleProps {
  currPage: number;
  self: number;
  key: number;
}

type PaginationProps = Pick<StyleProps, "currPage">;

interface NextProps extends PaginationProps {
  maxPage: number;
}

const Swiper: React.FC<Props> = ({
  navigation,
  pagination,
  autoplay,
  delay,
  children,
}) => {
  const [currPage, setCurrPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(() => children.length);
  const [startPoint, setStartPoint] = useState<number>(0);

  const swiperRef = useRef<HTMLDivElement>(null);

  const resetCurrPage = () => setCurrPage(1);
  const increaseCurrPage = () => setCurrPage((prev) => ++prev);
  const decreaseCurrPage = () => setCurrPage((prev) => --prev);
  const changeCurrPage = (value: number) => setCurrPage(value);

  const handleStartPoint = (e: MouseEvent<HTMLDivElement>) =>
    setStartPoint(e.clientX);

  const handleEndPoint = (e: MouseEvent<HTMLDivElement>) => {
    const endPoint = e.clientX;
    if (startPoint < endPoint) {
      // 뒤로 갈 경우.
      prevMove();
    } else if (startPoint > endPoint) {
      // 앞으로 갈 경우.
      nextMove();
    }
  };

  const prevMove = () => {
    if (currPage > 1) {
      if (swiperRef.current) {
        const sliderWidth = swiperRef.current.clientWidth;
        const offSet = sliderWidth * (currPage - 2);

        const swiperSlides = swiperRef.current.children;

        for (let i = 0; i < swiperSlides.length; i++) {
          swiperSlides[i].setAttribute("style", `left: -${offSet}px`);
        }

        decreaseCurrPage();
      }
    }
  };

  const nextMove = () => {
    if (currPage < maxPage) {
      if (swiperRef.current) {
        const sliderWidth = swiperRef.current.clientWidth;
        const offSet = sliderWidth * currPage;

        const swiperSlides = swiperRef.current.children;
        for (let i = 0; i < swiperSlides.length; i++) {
          swiperSlides[i].setAttribute("style", `left: -${offSet}px`);
        }

        increaseCurrPage();
      }
    }

    // 마지막 페이지에 도달할 경우.
    else {
      if (autoplay) {
        if (swiperRef.current) {
          const offSet = 0;

          const swiperSlides = swiperRef.current.children;
          for (let i = 0; i < swiperSlides.length; i++) {
            swiperSlides[i].setAttribute("style", `left: -${offSet}px`);
          }
        }
      }
    }
  };

  const ChangePage = (el: number) => {
    if (swiperRef.current) {
      const sliderWidth = swiperRef.current.clientWidth;
      const offSet = sliderWidth * (el - 1);

      const swiperSlides = swiperRef.current.children;
      for (let i = 0; i < swiperSlides.length; i++) {
        swiperSlides[i].setAttribute("style", `left: -${offSet}px`);
      }

      changeCurrPage(el);
    }
  };

  const Pagination = () => {
    const array = new Array(maxPage).fill(0).map((_, index) => index + 1);
    return (
      <BulletBox>
        {array.map((el) => (
          <Bullet
            currPage={currPage}
            self={el}
            key={el}
            onClick={() => ChangePage(el)}
          />
        ))}
      </BulletBox>
    );
  };

  useInterval(nextMove, currPage, maxPage, resetCurrPage, autoplay, delay);

  return (
    <>
      <Container
        onMouseDown={handleStartPoint}
        onMouseUp={handleEndPoint}
        ref={swiperRef}
      >
        {children}
      </Container>
      {navigation ? (
        <Prev
          onClick={currPage === 1 ? undefined : prevMove}
          currPage={currPage}
        />
      ) : null}
      {navigation ? (
        <Next
          onClick={currPage < maxPage ? nextMove : undefined}
          currPage={currPage}
          maxPage={maxPage}
        />
      ) : null}
      {pagination ? Pagination() : null}
    </>
  );
};

export default Swiper;

const Container = styled.span`
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  width: 100%;
  user-select: none;
`;

const Prev = styled.span<PaginationProps>`
  &::after {
    content: "";
    position: absolute;
    top: calc(50% - 10px);
    left: 20px;

    opacity: ${({ currPage }) => (currPage === 1 ? 0.3 : 1)};
    border: solid #007bff;
    border-width: 0 4px 4px 0;
    padding: 15px;
    transform: rotate(135deg);
    cursor: ${({ currPage }) => (currPage === 1 ? "not-allowed" : "pointer")};
  }
`;

const Next = styled.span<NextProps>`
  &::after {
    content: "";
    position: absolute;
    top: calc(50% - 10px);
    right: 20px;

    opacity: ${({ currPage, maxPage }) => (currPage === maxPage ? 0.3 : 1)};
    border: solid #007bff;
    border-width: 0 4px 4px 0;
    padding: 15px;
    transform: rotate(-45deg);
    cursor: ${({ currPage, maxPage }) =>
      currPage === maxPage ? "not-allowed" : "pointer"};
  }
`;

const BulletBox = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bullet = styled.span<StyleProps>`
  border: ${({ currPage, self }) =>
    `3px solid ${currPage === self ? "#007bff" : "yellow"}`};
  border-radius: 50%;
  margin: 0 4px;
  cursor: pointer;
`;
