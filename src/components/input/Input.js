import React from "react";
import { useController } from "react-hook-form";
import ProptTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";

const Input = ({
  control,
  name,
  type = "text",
  error = "",
  placeholder = "",
  children,
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
        className={`w-full px-6 py-4 text-sm font-medium border  rounded-xl text-text1 dark:text-white dark:placeholder:text-text2 placeholder:text-text4 placeholder:font-medium bg-transparent ${
          error.length > 0
            ? "border-error text-error"
            : "border-strock text-text1 dark:border-darkStroke"
        } ${children ? "pr-14" : ""}`}
        placeholder={error.length <= 0 ? placeholder : ""}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="absolute text-sm font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6 error-input">
          {error}
        </span>
      )}
      {children && (
        <span className="absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4">
          {children}
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
  children: ProptTypes.node,
};

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
