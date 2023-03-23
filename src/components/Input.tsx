import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IInput } from "../models/component/Input";
import { ChangeEvent } from "react";

const Input = (props: IInput) => {
  return (
    <Box>
      <TextField
        className="w-full"
        id={props.id}
        label={props.label}
        defaultValue={props.defaultValue}
        helperText={props.helperText}
        variant={props.variant}
        type={props.type}
        onChange={props.change}
        error={props.error}
        required={props.required}
      />
    </Box>
  );
};

export default Input;
