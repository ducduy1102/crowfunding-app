import React from "react";
import ProptTypes from "prop-types";

const DashboardSidebar = ({ children }) => {
  return <div>Sidebar {children}</div>;
};

DashboardSidebar.propTypes = {
  children: ProptTypes.node,
};

export default DashboardSidebar;
