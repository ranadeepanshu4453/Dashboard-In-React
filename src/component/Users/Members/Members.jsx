import React, { useState } from "react";
import Layout from "../../../layout/Layout";

const Members = () => {
  const [answer, setAnswer] = useState('');
  const [inputValue, setInputValue] = useState('');

  const checkAnswer = () => {
    if (inputValue === "Elite Edge Gym") {
      setAnswer('Correct');
    } else {
      setAnswer('Incorrect');
    }
  };

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto mt-10 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Quiz</h3>
        <p className="text-lg text-gray-600 mb-6">On Which Project We Are Working Now?</p>
        <input 
          type="text" 
          value={inputValue}  
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Enter answer" 
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <button 
          onClick={checkAnswer} 
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
        <h3 className="text-lg text-gray-800 mt-4">Your Answer Is: {answer}</h3>
      </div>
    </Layout>
  );
};

export default Members;
