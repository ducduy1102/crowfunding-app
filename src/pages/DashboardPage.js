import Heading from "components/common/Heading";
import LayoutDashboard from "layout/LayoutDashboard";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampainItem from "modules/campaign/CampainItem";
import React from "react";
import { v4 } from "uuid";

const DashboardPage = () => {
  return (
    <LayoutDashboard>
      <Heading number={4}>Your campaign</Heading>
      <Heading>Popular campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampainItem key={v4}></CampainItem>
          ))}
      </CampaignGrid>
    </LayoutDashboard>
  );
};

export default DashboardPage;
