import React from "react";

// Defs
import { ButtonProps } from "./Button.def";

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button;
