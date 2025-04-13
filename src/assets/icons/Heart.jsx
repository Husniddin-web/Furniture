import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#454545"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.338 10.65 11.01 19 2.68 10.65a5.626 5.626 0 0 1-1.27-1.911 5.682 5.682 0 0 1 .117-4.507 5.615 5.615 0 0 1 1.368-1.84 5.535 5.535 0 0 1 1.983-1.13 5.489 5.489 0 0 1 4.429.478 5.576 5.576 0 0 1 1.702 1.528 5.574 5.574 0 0 1 1.705-1.515 5.506 5.506 0 0 1 4.417-.463c.729.234 1.401.619 1.976 1.128a5.616 5.616 0 0 1 1.364 1.835 5.679 5.679 0 0 1-1.133 6.403"
    />
  </svg>
);
export default SvgComponent;
