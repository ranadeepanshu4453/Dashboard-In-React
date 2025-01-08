import React from "react";

const File = ({ children }) => {
  return (
    <div className="w-72 m-8 bg-white rounded-md shadow-lg flex flex-col gap-9 p-3">
      <span className="flex flex-row items-center gap-6 justify-center">
        <svg
          class="h-12 w-12 text-black"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />{" "}
          <circle cx="8.5" cy="8.5" r="1.5" />{" "}
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <p>Abstract.png</p>
        <svg
          class="h-12 w-12 text-black hover:bg-gray-200 rounded-full p-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </span>
      <p>Yes sure, here you go.</p>
    </div>
  );
};

export default File;
