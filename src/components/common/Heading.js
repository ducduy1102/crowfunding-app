import React from "react";
import ProptTypes from "prop-types";
import classNames from "utils/classNames";

const Heading = ({ children, className = "", number = null }) => {
  return (
    <h2
      className={classNames("text-lg font-semibold text-text1 mb-5", className)}
    >
      {children}
      {number && <span className="text-secondary">{`(${number})`}</span>}
    </h2>
  );
};

Heading.propTypes = {
  children: ProptTypes.node,
  className: ProptTypes.string,
  number: ProptTypes.number,
};
export default Heading;
