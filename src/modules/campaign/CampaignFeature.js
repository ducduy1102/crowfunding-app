import React from "react";
import CampImage from "./parts/CampImage";
import ProptTypes from "prop-types";
import CampCategory from "./parts/CampCategory";
import CampTitle from "./parts/CampTitle";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-x-[30px] max-w-[1048px]">
      <CampImage className="h-[266px] flex-1"></CampImage>
      <div className="flex-1 max-w-[435px]">
        <CampCategory text="Architecture" className="text-sm"></CampCategory>
        <CampTitle className="mb-4 text-xl font-bold">
          Remake - We Make architecture exhibition
        </CampTitle>
        <CampDesc className="mb-6 text-sm">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampDesc>
        <div className="w-full h-[5px] mb-6 rounded-full bg-[#EFEFEF]">
          <div className="w-2/4 h-full rounded-full bg-primary"></div>
        </div>
        <div className="flex items-start justify-between gap-x-5">
          <CampMeta size="big"></CampMeta>
          <CampMeta size="big"></CampMeta>
          <CampMeta size="big"></CampMeta>
        </div>
      </div>
    </div>
  );
};

CampaignFeature.propTypes = {
  // image: ProptTypes.string,
  // author: ProptTypes.string,
};

export default CampaignFeature;
