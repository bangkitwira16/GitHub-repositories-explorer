import React from "react";
import {Button as ButtonComponent} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { IButton } from "../models/component/Button";

const Button = (props: IButton) => {
  const loading = props.isLoading ? <CircularProgress className="ml-2" size={14} /> : null;
  return (
    <ButtonComponent
      variant={props.variant}
      color={props.color}
      size={props.size}
      disabled={props.disabled}
      className={props.className}
      onClick={props.click}
    >
      {props.text} {loading}
    </ButtonComponent>
  );
};

export default Button;
