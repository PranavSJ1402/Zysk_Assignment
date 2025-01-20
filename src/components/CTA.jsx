import React from "react";

const CTA = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-5 text-center space-y-4 h-auto mb-6">
      {/* Heading */}
      <h1 className="text-4xl font-semibold text-gray-900 sm:text-3xl md:text-4xl">
        Start your free trial
      </h1>

      {/* Description */}
      <p className="text-xl font-medium text-gray-500 sm:text-lg md:text-xl">
        Join over 4000+ startups already growing with unlimited.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        {/* Get Started Button - Appears first in mobile, second in desktop */}
        <button className="bg-red-500 text-white px-6 py-2 rounded-md shadow-sm hover:bg-red-600 transition sm:order-2">
          Get Started
        </button>
        
        {/* Learn More Button - Appears second in mobile, first in desktop */}
        <button className="bg-white text-gray-700 border border-gray-300 px-6 py-2 rounded-md shadow-sm hover:bg-gray-100 transition sm:order-1">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default CTA;
