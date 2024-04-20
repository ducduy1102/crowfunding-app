import React from "react";

const DashboardSearch = () => {
  return (
    <div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218, 213, 213, 0.15)] p-2 w-full max-w-[458px] flex items-center">
      <div className="flex-1 px-5">
        <input
          type="text"
          placeholder="Do fundrise now"
          className="w-full text-sm bg-transparent placeholder:text-text4 text-text1"
        />
      </div>
      <button className="flex items-center justify-center h-10 text-white rounded-full w-[72px] bg-primary flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default DashboardSearch;
