import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path stroke="#000" d="m1 1 9 9m9 9-9-9m0 0-9 9L19 1" />
  </svg>
);
export default SvgComponent;
