import React from "react";

const Image = ({ children }) => {
  return (
    <div className="flex flex-row items-center">
      <div className="w-fit h-full rounded-md border border-gray-300 m-8 p-3 pb-4 bg-white">
        <img src="images/gym.jpg" alt="User Avatar" />
        {children}
      </div>
      <svg
        class="h-5 w-5 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
        />
      </svg>
    </div>
  );
};

export default Image;
