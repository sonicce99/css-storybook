const getLeftPosition = (
  placement: string,
  containerEl: React.RefObject<HTMLDivElement>
) => {
  switch (placement) {
    case "topLeft":
    case "bottomLeft":
      return 0;

    case "top":
    case "bottom":
      if (containerEl.current) {
        const containerWidth = containerEl.current.offsetWidth;
        const contentEl = containerEl.current
          .lastElementChild as HTMLDivElement;

        if (contentEl) {
          const contentWidth = contentEl.offsetWidth;
          return `${
            Math.floor(containerWidth / 2) - Math.floor(contentWidth / 2)
          }px`;
        }
      }

    case "rightTop":
    case "right":
    case "rightBottom":
      return "100%";
  }
};

export default getLeftPosition;
