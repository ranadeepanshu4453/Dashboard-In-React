import React from "react";

const WriteBox = () => {
  return (
    <div className="flex flex-col justify-center">
      <svg
        class="w-9 h-9 absolute left-6 top-6 hover:bg-white rounded-full p-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        viewBox="0 0 24 24"
      >
        <path
          d="M17.5 5.25581V16.5C17.5 19.5376 15.0376 22 12 22C8.96243 22 6.5 19.5376 6.5 16.5V5.66667C6.5 3.64162 8.14162 2 10.1667 2C12.1917 2 13.8333 3.64162 13.8333 5.66667V16.4457C13.8333 17.4583 13.0125 18.2791 12 18.2791C10.9875 18.2791 10.1667 17.4583 10.1667 16.4457V6.65116"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <input
        className="bg-gray-200 w-[75%] m-4 h-10 rounded-lg shadow-lg p-6 pl-12"
        type="text"
        name=""
        id=""
        placeholder="Write a message..."
      />
      <svg
        class="w-8 h-8 absolute left-[73%] hover:bg-white rounded-full p-1"
        width="24"
        height="24"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M16.5 14.5C16.5 14.5 15 16.5 12 16.5C9 16.5 7.5 14.5 7.5 14.5"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M15.5 9C15.2239 9 15 8.77614 15 8.5C15 8.22386 15.2239 8 15.5 8C15.7761 8 16 8.22386 16 8.5C16 8.77614 15.7761 9 15.5 9Z"
          fill="currentColor"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M8.5 9C8.22386 9 8 8.77614 8 8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5C9 8.77614 8.77614 9 8.5 9Z"
          fill="currentColor"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <svg
        class="w-12 h-12 absolute left-[77%] text-green-600 hover:text-green-700 hover:scale-95"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        id="mdi-send-circle"
        viewBox="0 0 24 24"
      >
        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M8,7.71V11.05L15.14,12L8,12.95V16.29L18,12L8,7.71Z"></path>
      </svg>
    </div>
  );
};

export default WriteBox;
