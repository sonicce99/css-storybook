const getBottomPosition = (
  placement: string,
  containerEl: React.RefObject<HTMLDivElement>
) => {
  switch (placement) {
    case "topLeft":
    case "top":
    case "topRight":
      return "100%";

    case "left":
    case "right":
      if (containerEl.current) {
        const containerHeight = containerEl.current.offsetHeight;
        const contentEl = containerEl.current
          .lastElementChild as HTMLDivElement;

        if (contentEl) {
          const contentHeight = contentEl.offsetHeight;
          return `-${
            Math.floor(contentHeight) / 2 - Math.floor(containerHeight / 2)
          }px`;
        }
      }

    case "leftTop":
    case "rightTop":
      if (containerEl.current) {
        const containerHeight = containerEl.current.offsetHeight;
        const contentEl = containerEl.current
          .lastElementChild as HTMLDivElement;

        if (contentEl) {
          const contentHeight = contentEl.offsetHeight;
          return `-${contentHeight - containerHeight}px`;
        }
      }

    case "leftBottom":
    case "rightBottom":
      return 0;
  }
};

export default getBottomPosition;
