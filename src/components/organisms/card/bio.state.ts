import { useMemo, useState } from "react";

export const useBioState = () => {
  const [seeMore, setSeeMore] = useState(true);

  const handlerSeeMore = () => setSeeMore((prev) => !prev);

  const screenSize = useMemo(
    () => (!seeMore ? "h-auto" : "h-[550px]"),
    [seeMore]
  );

  return {
    seeMore,
    screenSize,

    handlerSeeMore,
  };
};
