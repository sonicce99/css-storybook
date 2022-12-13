import { RefObject } from "react";

const getArrowLeftPosition = (
  placement: string,
  containerEl: RefObject<HTMLDivElement>
) => {
  switch (placement) {
    case "topLeft":
      return "15px";

    case "bottomLeft":
      return "15px";

    case "top":
    case "bottom":
      if (containerEl.current) {
        const contentEl = containerEl.current
          .lastElementChild as HTMLDivElement;

        if (contentEl) {
          const contentWidth = contentEl.offsetWidth;
          return `${Math.floor(contentWidth / 2 - 7)}px`;
        }
      }

    case "rightTop":
    case "right":
    case "rightBottom":
      return "-6px";
  }
};

export default getArrowLeftPosition;
