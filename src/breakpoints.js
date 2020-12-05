import { useMediaQuery } from "react-responsive";

const useBreakpoints = ({ breakpoint, dir }) => {
  const breakpoints = {
    xl: {
      up: { minWidth: "1200px" },
      down: { maxWidth: "1200px" },
    },
    lg: {
      up: { minWidth: "992px" },
      down: { maxWidth: "992px" },
    },
    md: {
      up: { minWidth: "768px" },
      down: { maxWidth: "768px" },
    },
    sm: {
      up: { minWidth: "576px" },
      down: { maxWidth: "576px" },
    },
    xs: {
      up: { minWidth: "0" },
    },
  };
  return useMediaQuery(breakpoints[breakpoint][dir]);
};

export default useBreakpoints;
