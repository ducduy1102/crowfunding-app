import React from "react";
import ProptTypes from "prop-types";

const FormRow = ({ children }) => {
  return <div className="grid grid-cols-2 lg:gap-x-[45px]">{children}</div>;
};

FormRow.propTypes = {
  children: ProptTypes.node,
};

export default FormRow;
