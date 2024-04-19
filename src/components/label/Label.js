import React from "react";
import ProptTypes from "prop-types";

const Label = ({ children, htmlFor = "", className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`inline-block text-sm font-medium cursor-pointer text-text2 ${className}`}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  children: ProptTypes.node,
  htmlFor: ProptTypes.string,
  className: ProptTypes.string,
};
export default Label;
