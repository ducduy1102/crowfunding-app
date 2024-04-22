import React from "react";
import ProptTypes from "prop-types";

const CampaignGrid = ({ children, type = "default" }) => {
  if (type !== "default")
    return <div className="grid grid-cols-1 gap-y-10">{children}</div>;
  return <div className="grid grid-cols-4 gap-x-7">{children}</div>;
};

CampaignGrid.propTypes = {
  children: ProptTypes.node,
  type: ProptTypes.string,
};

export default CampaignGrid;
