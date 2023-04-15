import React from "react";

// Defs
import { ButtonProps } from "./Button.def";

// Styles
import "./Button.style.scss";

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant,
  shape,
  ...props
}) => {
  const classNames = `btn btn-${variant} btn-${shape}`;

  return (
    <button className={classNames} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
