import React, { Fragment } from "react";
import CampDesc from "./parts/CampDesc";
import CampTitle from "./parts/CampTitle";
import CampCategory from "./parts/CampCategory";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import { Button } from "components/button";
import CampViewAuthor from "./parts/CampViewAuthor";
import CampaignSupport from "./parts/CampaignSupport";
import CampaignPerk from "./parts/CampaignPerk";
import CampaignGrid from "./CampaignGrid";
import CampainItem from "./CampainItem";

const CampaignView = () => {
  return (
    <Fragment>
      <div
        className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white text-[40px] font-bold mb-10"
        style={{
          backgroundImage: `linear-gradient(179.14deg, rgba(32, 18, 63, 0.4) -7.14%, rgba(0, 0, 0, 0.4) 87.01%), url(/banner.png)`,
        }}
      >
        <h1>Education</h1>
      </div>
      <div className="flex items-start gap-x-10 max-w-[1066px]">
        <div className="flex-1">
          <CampImage className="h-[398px] mb-8"></CampImage>
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  key={index}
                  src="https://source.unsplash.com/random"
                  className="w-[89px] h-[70px] object-cover rounded-lg"
                  alt=""
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <CampCategory text="Architecture" className="text-sm"></CampCategory>
          <CampTitle className="mb-4 text-xl font-bold">
            Remake - We Make architecture exhibition
          </CampTitle>
          <CampDesc className="mb-6 text-sm">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampDesc>
          <CampViewAuthor></CampViewAuthor>
          <div className="w-full h-[5px] mb-6 rounded-full bg-[#EFEFEF]">
            <div className="w-2/4 h-full rounded-full bg-primary"></div>
          </div>
          <div className="flex items-start justify-between mb-4 gap-x-5">
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
          </div>
          <Button className="w-full" kind="primary" type="button">
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[100px] bg-white p-5 shadow-sm border-b border-b-slate-100 mb-6">
        <div className="flex items-center text-sm font-medium gap-x-14 text-text3">
          <span className="cursor-pointer text-secondary">Campaign</span>
        </div>
        <Button kind="primary" type="button">
          Back this project
        </Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div className=""></div>
        <div className="">
          <CampaignSupport></CampaignSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      <h2 className="mb-10 text-xl font-semibold">
        You also may be interested in
      </h2>
      <CampaignGrid>
        <CampainItem></CampainItem>
        <CampainItem></CampainItem>
        <CampainItem></CampainItem>
        <CampainItem></CampainItem>
      </CampaignGrid>
    </Fragment>
  );
};

export default CampaignView;