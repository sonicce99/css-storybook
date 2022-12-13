import { RefObject } from "react";

const getArrowTopPosition = (
  placement: string,
  containerEl: RefObject<HTMLDivElement>
) => {
  switch (placement) {
    case "leftTop":
      return "6px";

    case "left":
    case "right":
      if (containerEl.current) {
        const contentEl = containerEl.current
          .lastElementChild as HTMLDivElement;

        if (contentEl) {
          const contentHeight = contentEl.offsetHeight;
          return `${Math.floor(contentHeight / 2 - 7)}px`;
        }
      }

    case "bottomLeft":
    case "bottom":
    case "bottomRight":
      return "-6px";
  }
};

export default getArrowTopPosition;
