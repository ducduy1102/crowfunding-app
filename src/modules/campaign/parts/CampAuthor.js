import React from "react";
import ProptTypes from "prop-types";
import { defaultImage } from "constants/global";

const CampAuthor = ({ image = defaultImage, author = "Mahfuzul Nabil" }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img
        src={image}
        alt=""
        className="object-cover w-8 h-8 rounded-full"
      ></img>
      <p className="text-xs text-text3">
        By <span className="font-semibold text-text2">{author}</span>
      </p>
    </div>
  );
};

CampAuthor.propTypes = {
  image: ProptTypes.string,
  author: ProptTypes.string,
};

export default CampAuthor;
