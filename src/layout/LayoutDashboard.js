import React from "react";
import ProptTypes from "prop-types";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-lite">
      <DashboardTopbar></DashboardTopbar>
      <div className="">
        <DashboardSidebar></DashboardSidebar>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

LayoutDashboard.propTypes = {
  children: ProptTypes.node,
};

export default LayoutDashboard;
