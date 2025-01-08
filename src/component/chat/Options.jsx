import React, { useState, useRef, useEffect } from "react";

const Options = () => {
  const [isOpen, setIsOpen] = useState(false);
  const optionsRef = useRef(null);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (optionsRef.current && !optionsRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={optionsRef}>
      <svg
        className="h-5 w-5 text-black cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={toggleOptions}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
        />
      </svg>
      {isOpen && (
        <div className="absolute right-10 bg-white rounded-lg shadow-lg text-center m-4 p-2">
          <ul>
            <li className="hover:bg-gray-200 p-1 rounded-md">Reply</li>
            <li className="hover:bg-gray-200 p-1 rounded-md">
              React to message
            </li>
            <li className="hover:bg-gray-200 p-1 rounded-md">
              Forward Message
            </li>
            <li className="hover:bg-gray-200 p-1 rounded-md">Star Message</li>
            <li className="hover:bg-gray-200 p-1 rounded-md">Report</li>
            <li className="hover:bg-gray-200 p-1 rounded-md">Delete Message</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Options;
