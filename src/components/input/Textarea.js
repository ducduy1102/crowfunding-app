import React from "react";
import { useController } from "react-hook-form";
import ProptTypes from "prop-types";

const Textarea = ({ control, name, placeholder = "", children, ...rest }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea
      className="w-full px-6 py-4 text-sm font-medium bg-transparent border rounded-xl text-text1 dark:text-white dark:placeholder:text-text2 placeholder:text-text4 placeholder:font-medium resize-none min-h-[140px] outline-none"
      placeholder={placeholder}
      {...field}
      {...rest}
    ></textarea>
  );
};

Textarea.propTypes = {
  control: ProptTypes.any.isRequired,
  name: ProptTypes.string,
  placeholder: ProptTypes.string,
  children: ProptTypes.node,
};

export default Textarea;
