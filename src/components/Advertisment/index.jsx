import React from "react";
import { AdvrWrapper } from "./advr.style";

const Advertisment = (props) => {
  const { imgUrl, text } = props.data;
  return (
    <AdvrWrapper>
      <p>
        {text} <span></span>
      </p>
      <div>
        <img src={imgUrl} alt="" />
      </div>
    </AdvrWrapper>
  );
};
export default Advertisment;
