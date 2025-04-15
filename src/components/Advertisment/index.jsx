import React from "react";
import { AdvrWrapper } from "./advr.style";

const Advertisment = (props) => {
  const { imgUrl, text } = props.data;
  return (
    <AdvrWrapper>
      <p className="advertisment-title">
        {text} <span></span>
      </p>
      <div className="advertisment-img">
        <img src={imgUrl} alt="" />
      </div>
    </AdvrWrapper>
  );
};
export default Advertisment;
