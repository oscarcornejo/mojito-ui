import { ReactNode } from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant: "primary" | "danger";
  shape?: "rounded";
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
