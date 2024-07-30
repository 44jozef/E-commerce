import React from "react";
import { useNavigate } from "react-router-dom";
const TitleSection = () => {
  const navigate=useNavigate();
  return (
    
    <div className="titlebg">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-700 text-4xl font-bold mb-4">
        Welcome to Our E-commerce Site
      </h1>
      <div className="flex space-x-4">
      <button className="bg-blue-500 hover:bg-blue-700 active:bg-black text-white font-bold py-2 px-4 rounded-full"onClick={()=>navigate("/Catalog")}>
          Get Started
        </button>
        <button className="bg-black hover:bg-black active:bg-blue-800 text-white font-bold py-2 px-4 rounded-full"onClick={()=>navigate("/About")}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default TitleSection;
