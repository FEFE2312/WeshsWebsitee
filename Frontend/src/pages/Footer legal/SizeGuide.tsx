import React from "react";

const SizeGuide = () => {
  return (
    <div className="min-h-screen bg-medium-gray text-white flex items-center justify-center p-10">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-6">Size Guide</h1>
        <img 
          src="/images/General/Sizeguide23.png" 
          alt="Size Guide" 
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default SizeGuide;
