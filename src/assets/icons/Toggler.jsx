import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={16}
    fill="none"
    {...props}
  >
    <path stroke="#fff" strokeWidth={2} d="M0 1h25M0 8h18M0 15h25" />
  </svg>
);
export default SvgComponent;
