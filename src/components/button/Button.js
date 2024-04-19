import React from "react";
import ProptTypes from "prop-types";

const Button = ({
  type = "button",
  onClick = () => {},
  children,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex items-center justify-center p-4 text-base font-semibold rounded-xl text-white ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: ProptTypes.string.isRequired,
  children: ProptTypes.node,
  onClick: ProptTypes.func,
  className: ProptTypes.string,
};
export default Button;
