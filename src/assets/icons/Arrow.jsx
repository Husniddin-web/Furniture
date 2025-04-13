import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={12}
    fill="none"
    {...props}
  >
    <path stroke="#454545" d="M0 6h14m0 0-5 5m5-5L9 1" />
  </svg>
);
export default SvgComponent;
