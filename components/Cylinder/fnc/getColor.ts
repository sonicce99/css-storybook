export const getColor = (index: number) => {
  const left = index % 3;

  switch (left) {
    case 0:
      return "#ffffff";

    case 1:
      return "#db0b0b";

    case 2:
      return "#0d17d9";
  }
};
