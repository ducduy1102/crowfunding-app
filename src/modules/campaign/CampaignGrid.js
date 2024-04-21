import React from "react";
import ProptTypes from "prop-types";

const CampaignGrid = ({ children }) => {
  return <div className="grid grid-cols-4 gap-x-7">{children}</div>;
};

CampaignGrid.propTypes = {
  children: ProptTypes.node,
};

export default CampaignGrid;
