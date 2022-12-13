const getRightPosition = (placement: string) => {
  switch (placement) {
    case "topRight":
    case "bottomRight":
      return 0;

    case "leftTop":
    case "left":
    case "leftBottom":
      return "100%";
  }
};

export default getRightPosition;
