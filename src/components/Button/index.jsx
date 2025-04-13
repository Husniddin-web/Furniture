import React from "react";
import { ButtonWrapper } from "./button.style";

const Button = (props) => {
  const { children, type = "light" } = props;
  return <ButtonWrapper>{children}</ButtonWrapper>;
};

export default Button;
