import React from "react";
import Options from "./Options";

const Reply = ({ children }) => {
  return (
    <div className="flex flex-row items-center justify-end m-8">
      <span className="bg-blue-500 text-white rounded-md shadow-lg p-2">
        {children}{" "}
      </span>
      <Options />
    </div>
  );
};

export default Reply;
