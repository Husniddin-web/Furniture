import React from "react";
import Img from "../../assets/images/svg-why-norlight.svg";
import { ReasonCardWrapper } from "./reason.style";

const ReasonCard = () => {
  return (
    <ReasonCardWrapper>
      <div className="img">
        <img  src={Img} alt="" />
      </div>
      <h4>Только проверенные бренды</h4>
      <p> Бренды, проверенные временем и качеством</p>
    </ReasonCardWrapper>
  );
};

export default ReasonCard;
