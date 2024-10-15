import React, { useState } from "react";

function FilterComponent() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("todo"); // State to manage active tab

  // Function to toggle the filter div visibility
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="relative">
      {/* SVG Icon */}
      <span className="cursor-pointer" onClick={toggleFilter}>
        <svg
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="21" y1="10" x2="7" y2="10" />
          <line x1="21" y1="6" x2="3" y2="6" />
          <line x1="21" y1="14" x2="3" y2="14" />
          <line x1="21" y1="18" x2="7" y2="18" />
        </svg>
      </span>

      {/* Filter div */}
      <div
        className={`fixed top-0 right-0 w-80 h-full  bg-white shadow-lg transform transition-transform duration-300 ${
          isFilterOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Toggle buttons for To-do and Chats */}
        <div className="p-4 flex flex-row justify-between items-center bg-purple-300">
          {/* Buttons Container */}
          <div className="flex flex-row gap-10">
            {/* Close button */}
            <button className="text-gray-600" onClick={toggleFilter}>
              <svg
                class="h-7 w-7 text-white hover:text-red-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="12" cy="12" r="9" />{" "}
                <line x1="8" y1="12" x2="16" y2="12" />{" "}
                <line x1="8" y1="12" x2="12" y2="16" />{" "}
                <line x1="8" y1="12" x2="12" y2="8" />
              </svg>
            </button>
            <button
              className={`text-sm font-bold mb-2 ${
                activeTab === "todo"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-800" // Add default text color
              }`}
              onClick={() => setActiveTab("todo")}
            >
              To-do
            </button>
            <button
              className={`text-sm font-bold mb-2 ${
                activeTab === "chats"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-800" // Add default text color
              }`}
              onClick={() => setActiveTab("chats")}
            >
              Chats
            </button>
          </div>
        </div>

        {/* Conditional rendering based on active tab */}
        <div className="p-4">
          {activeTab === "todo" && (
            <div>
              <h2 className="text-lg font-bold">To-do List</h2>
              <p>Here you can manage your tasks.</p>
              {/* Add your To-do content here */}
            </div>
          )}
          {activeTab === "chats" && (
            <div>
              <h2 className="text-lg font-bold text-center">Chats</h2>
              <div className="flex flex-row justify-between">
                <label>Friends</label>
                <label>See All</label>
              </div>
              <span className="flex flex-row items-center justify-between mt-3 hover:bg-purple-100 rounded-md p-3">
                <div className="relative inline-block">
                  <img
                    src="images/gym.jpg"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full border border-gray-300 mr-2"
                  />
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></span>
                </div>

                <span className="flex flex-col">
                  <label className="text-sm">Deepanshu Chauhan</label>
                  <label className="text-sm">Available</label>
                </span>
                <label>19 min</label>
              </span>
              <span className="flex flex-row items-center justify-between mt-3 hover:bg-purple-100 rounded-md p-3">
                <div className="relative inline-block">
                  <img
                    src="images/gym.jpg"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full border border-gray-300 mr-2"
                  />
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></span>
                </div>

                <span className="flex flex-col">
                  <label className="text-sm">Deepanshu Chauhan </label>
                  <label className="text-sm">Available</label>
                </span>
                <label>19 min</label>
              </span>
              <span className="flex flex-row items-center justify-between mt-3 hover:bg-purple-100 rounded-md p-3">
                <div className="relative inline-block">
                  <img
                    src="images/gym.jpg"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full border border-gray-300 mr-2"
                  />
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></span>
                </div>

                <span className="flex flex-col">
                  <label className="text-sm">Deepanshu Chauhan</label>
                  <label className="text-sm">Available</label>
                </span>
                <label>19 min</label>
              </span>
              <span className="flex flex-row items-center justify-between mt-3 hover:bg-purple-100 rounded-md p-3">
                <div className="relative inline-block">
                  <img
                    src="images/gym.jpg"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full border border-gray-300 mr-2"
                  />
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></span>
                </div>

                <span className="flex flex-col">
                  <label className="text-sm">Deepanshu Chauhan</label>
                  <label className="text-sm">Available</label>
                </span> 
                <label>19 min</label>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterComponent;
