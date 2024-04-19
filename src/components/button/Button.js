import React from "react";
import ProptTypes from "prop-types";

const Button = ({
  type = "button",
  onClick = () => {},
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex items-center justify-center p-4 text-base font-semibold rounded-xl text-white min-height-[56px]  ${
        !!isLoading ? "opacity-50 pointer-events-none" : ""
      } ${className}`}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: ProptTypes.string.isRequired,
  children: ProptTypes.node,
  onClick: ProptTypes.func,
  className: ProptTypes.string,
  isLoading: ProptTypes.bool,
};
export default Button;
