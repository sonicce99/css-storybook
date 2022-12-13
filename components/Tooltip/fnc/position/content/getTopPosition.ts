const getTopPosition = (placement: string) => {
  switch (placement) {
    case "leftTop":
    case "rightTop":
      return 0;

    case "bottomLeft":
    case "bottom":
    case "bottomRight":
      return "100%";
  }
};

export default getTopPosition;
