import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { imgbbAPI } from "config/config";

const ImageUpload = ({ onChange = () => {}, name = "" }) => {
  const handleUploadImage = async (e) => {
    const bodyFormData = new FormData();
    const file = e.target.files;
    if (!file) return;

    bodyFormData.append("image", file);
    const response = await axios({
      method: "post",
      url: `${imgbbAPI}`,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    // onChange(name, "response.data.data.url");
    // return response.data.data.url;
  };
  return (
    <label className="w-full rounded-xl border border-dashed border-gray-200 h-[200px] object-cover cursor-pointer flex items-center justify-center">
      <input className="hidden" type="file" onChange={handleUploadImage} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
        />
      </svg>
    </label>
  );
};

ImageUpload.propTypes = {
  onChange: PropTypes.func,
};

export default ImageUpload;
