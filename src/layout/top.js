import FilterComponent from "../component/FilterComponent";

function Top() {
  return (
    <nav className="bg-white text-black p-3 shadow-md z-10">
      <div className="flex-1 flex justify-between items-center"> 
        <div className="flex items-center p-4">
          <span className="flex items-center">
            <h2 className="text-xl font-bold ">
            </h2>
          </span>
          <span className="flex mx-4 flex-row">
            <div className="w-full flex flex-row items-center">
            <svg class="h-6 w-6 text-gray-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
              <input
                type="search"
                placeholder="Search here..."
                className="w-full p-2 rounded-md focus:outline-none focus:ring-0"
              />
              <hr className=" border-gray-300 m-0" />
            </div>
          </span>
        </div>
        {/*  */}
        <div className="flex items-center p-4 gap-10">
          <span className="flex items-center">
            <img
              src="images/gym.jpg"
              alt="User Avatar"
              className="w-10 h-10 rounded-full border border-gray-300 mr-2"
            />
            Deepanshu Chauhan{" "}
            <svg
              class="h-6 w-6 text-black mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          <span>
            <svg
              className="w-6 h-6 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <g data-name="message-square">
                <path d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM8 12a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path>
              </g>
            </svg>
          </span>
          <span>
            <svg
              className="h-6 w-6"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
              <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
            </svg>
          </span>
          <span>
            <svg
              className="h-8 w-8 "
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M7 6a7.75 7.75 0 1 0 10 0" />
              <line x1="12" y1="4" x2="12" y2="12" />
            </svg>
          </span>
          <span className="cursor-pointer">
           <FilterComponent />
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Top;
