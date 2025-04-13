import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#454545"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m13 13 4 4M1 7.857a6.857 6.857 0 1 0 13.714 0A6.857 6.857 0 0 0 1 7.857Z"
    />
  </svg>
);
export default SvgComponent;
