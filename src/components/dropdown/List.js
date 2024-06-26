import React, { Fragment } from "react";
import { useDropdown } from "./dropdown-context";
import PropTypes from "prop-types";

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <Fragment>
      {show && (
        <div className="absolute left-0 z-20 w-full bg-white rounded-lg shadow-sm top-full max-h-[300px] overflow-y-auto">
          {children}
        </div>
      )}
    </Fragment>
  );
};

List.propTypes = {
  children: PropTypes.node,
};

export default List;
