import React from "react";
import { ButtonWrapper } from "./button.style";

const Button = (props) => {
  const { children, type = "light", ...rest } = props;
  return (
    <ButtonWrapper className={type} {...rest}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
