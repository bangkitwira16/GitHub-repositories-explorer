import React, { FormEvent, useRef, useState } from "react";
import { ChangeEvent } from "react";
import Button from "./Button";
import Input from "./Input";
import { getUsers } from "../services/api.services";
import { UserContext } from "../context/UserContext";

const searchContainer = () => {
  const { state, dispatch } = React.useContext(UserContext);
  const [text, setText] = useState("");
  const [isInputError, setIsInputError] = useState(false);

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    if (text === "") {
      setIsInputError(true);
      return;
    }

    dispatch({ type: "request" });
    try {
      const response = await getUsers(text);
      if (response) dispatch({ type: "success", results: response.items });
    } catch (err: any) {
      dispatch({ type: "failure", error: err || "" });
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form
      onSubmit={submitForm}
      id="form-submit"
      className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-2 mb-12"
    >
      <div className="flex-grow w-full">
        <Input
          type="text"
          id="search"
          variant="filled"
          label="Enter username"
          required
          error={isInputError}
          change={onChange}
        />
      </div>
      <Button
        id="form-submit"
        className="w-full lg:w-auto"
        text="Search"
        color="primary"
        size="large"
        disabled={state.isLoading}
        variant="contained"
        isLoading={state.isLoading}
        type="submit"
      />
    </form>
  );
};

export default searchContainer;
