const getArrowBottomPosition = (placement: string) => {
  switch (placement) {
    case "leftBottom":
    case "rightBottom":
      return `7px`;

    case "bottomLeft":
      return "15px";

    case "topLeft":
    case "top":
    case "topRight":
      return "-6px";
  }
};

export default getArrowBottomPosition;
