import React from "react";
import Options from "./Options";

const Chat = ({ children }) => {
  return (
    <div className="flex flex-row items-center m-8">
      <span className="bg-white rounded-md shadow-lg p-2">{children} </span>
      <Options />
    </div>
  );
};

export default Chat;
