const getArrowRightPosition = (placement: string) => {
  switch (placement) {
    case "leftTop":
    case "left":
    case "leftBottom":
      return "-6px";

    case "topRight":
    case "bottomRight":
      return `15px`;
  }
};

export default getArrowRightPosition;
