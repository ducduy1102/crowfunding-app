import React from "react";
import ProptTypes from "prop-types";
import classNames from "utils/classNames";
import { Link } from "react-router-dom";

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
  let defaultClassName =
    "flex items-center justify-center p-4 text-base font-semibold rounded-xl min-h-[56px]";
  switch (rest.kind) {
    case "primary":
      defaultClassName = defaultClassName + " bg-primary text-white";
      break;

    case "secondary":
      defaultClassName = defaultClassName + " bg-secondary text-white";
      break;

    case "ghost":
      defaultClassName =
        defaultClassName + " bg-secondary bg-opacity-10 text-secondary";
      break;

    default:
      break;
  }

  if (rest.href)
    return (
      <Link to={rest.href} className={classNames(defaultClassName, className)}>
        {child}
      </Link>
    );
  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames(
        defaultClassName,
        !!isLoading ? "opacity-50 pointer-events-none" : "",
        className
      )}
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
  href: ProptTypes.string,
  kind: ProptTypes.oneOf(["primary", "secondary", "ghost"]),
};
export default Button;
