import React from "react";
import ProptTypes from "prop-types";
import { defaultImage } from "constants/global";

const CampImage = ({ className = "h-[158px]", image = defaultImage }) => {
  return (
    <div className={className}>
      <img
        src={image}
        alt=""
        className="object-cover w-full h-full rounded-2xl"
      />
    </div>
  );
};

CampImage.propTypes = {
  className: ProptTypes.string,
  image: ProptTypes.string,
};

export default CampImage;
