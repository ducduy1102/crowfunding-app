import React from "react";
import ProptTypes from "prop-types";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="min-h-screen p-10 bg-lite">
      <DashboardTopbar></DashboardTopbar>
      <div className="flex items-start flex-shrink-0 gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

LayoutDashboard.propTypes = {
  children: ProptTypes.node,
};

export default LayoutDashboard;
