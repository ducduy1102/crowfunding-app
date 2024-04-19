import React from "react";
import { useController } from "react-hook-form";
import ProptTypes from "prop-types";

const Input = ({
  control,
  name,
  type = "text",
  error = "",
  placeholder = "",
  ...rest
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`w-full px-6 py-4 text-sm font-medium border  rounded-xl text-text1 placeholder:text-text4 placeholder:font-medium ${
          error.length > 0 ? "border-error" : "border-strock"
        }`}
        placeholder={error.length < 0 ? rest.placeholder : ""}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="absolute text-sm font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6 error-input">
          {error}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  control: ProptTypes.any.isRequired,
  type: ProptTypes.string.isRequired,
  name: ProptTypes.string,
  error: ProptTypes.string,
  placeholder: ProptTypes.string,
};

export default Input;
