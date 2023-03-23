import { ChangeEventHandler } from "react";

type Variant = "outlined" | "filled" | "standard";
type Type = "text" | "number" | "email" | "password" | "tel";

export interface IInput {
  id: string;
  label?: string;
  defaultValue?: string;
  helperText?: string;
  variant: Variant;
  type: Type;
  disabled?: boolean;
  change: ChangeEventHandler<HTMLInputElement>;
  error?: boolean;
  required: boolean;
}
