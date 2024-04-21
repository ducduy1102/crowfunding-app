import React from "react";
import classNames from "utils/classNames";
import ProptTypes from "prop-types";

const CampDesc = ({ children, className = "mb-4 text-sm" }) => {
  return (
    <p className={classNames("text-text3 font-normal", className)}>
      {children}
    </p>
  );
};

CampDesc.propTypes = {
  children: ProptTypes.node,
  className: ProptTypes.string,
};

export default CampDesc;
