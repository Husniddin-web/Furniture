import React, { useState } from "react";
import { InputWrapper } from "./input.style";
import { SearchIcon } from "../../assets/icons";

const Input = ({ type, ...props }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const isHidden = value.length != 0;

  return (
    <InputWrapper>
      {type === "search" && (
        <SearchIcon className={`search-icon ${isHidden ? "none" : ""}`} />
      )}
      <input
        type={type}
        className="input"
        value={value}
        onChange={handleChange}
        {...props}
      />
    </InputWrapper>
  );
};

export default Input;
