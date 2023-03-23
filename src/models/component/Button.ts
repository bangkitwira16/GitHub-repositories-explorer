import { ButtonProps } from "@mui/material";
import { MouseEventHandler } from "react";

export interface IButton extends Partial<ButtonProps> {
  disabled: boolean;
  isLoading: boolean;
  text: string;
  click: MouseEventHandler;
  className: string;
}
