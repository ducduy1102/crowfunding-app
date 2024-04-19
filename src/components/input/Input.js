import React from "react";
import { useController } from "react-hook-form";
import ProptTypes from "prop-types";

const Input = ({ control, name, type = "text", ...rest }) => {
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
        className="w-full px-6 py-4 text-sm font-medium border border-strock rounded-xl text-text1 placeholder:text-text4 placeholder:font-medium"
        {...rest}
        {...field}
      />
    </div>
  );
};

Input.propTypes = {
  control: ProptTypes.any.isRequired,
  type: ProptTypes.string.isRequired,
  name: ProptTypes.string,
};

export default Input;
