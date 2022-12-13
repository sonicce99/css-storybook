const getContentMargin = (placement: string) => {
  switch (placement) {
    case "topLeft":
    case "top":
    case "topRight":
      return `0 0 20px 0`;

    case "rightTop":
    case "right":
    case "rightBottom":
      return `0 0 0 20px`;

    case "leftTop":
    case "left":
    case "leftBottom":
      return `0 20px 0 0`;

    case "bottomLeft":
    case "bottom":
    case "bottomRight":
      return `20px 0 0 0`;
  }
};

export default getContentMargin;
