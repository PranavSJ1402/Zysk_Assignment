import React from "react";
import { MdPlayCircleOutline } from "react-icons/md";
import ChatImage from '../../public/assets/chat.png'; // Import the chat image

const Hero = () => {
  return (
    <div className="text-center py-10 px-4 font-sans bg-gray-50">
      {/* Feature Notice */}
      <div className="flex justify-center items-center gap-2 mb-4 border border-orange-600 rounded-full px-4 py-2 w-fit mx-auto">
        <span className="text-orange-600 font-semibold text-sm px-3 py-1 rounded-full border border-orange-600">
          New feature
        </span>
        <a
          href="#team-dashboard"
          className="text-orange-600 font-semibold text-sm"
        >
          Check out the team dashboard →
        </a>
      </div>

      {/* Headline */}
      <h1 className="text-2xl md:text-4xl font-semibold mb-4">
        Beautiful analytics to grow smarter
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-6">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>

      {/* Button Group */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        <button className="bg-red-500 text-white px-6 py-2 rounded-full shadow-sm hover:bg-red-600 transition sm:order-2">
          Sign up
        </button>

        <button className="bg-white text-gray-700 border border-gray-300 px-6 py-2 rounded-full shadow-sm hover:bg-gray-100 transition sm:order-1 flex items-center space-x-2">
          <MdPlayCircleOutline className="text-2xl" />
          <span>Demo</span>
        </button>
      </div>

      {/* Chat Image */}
      <div className="flex justify-center items-center">
        <img
          src={ChatImage} // Use the imported ChatImage component here
          alt="chat"
          className="rounded-t-2xl w-full sm:w-4/5 lg:w-7/10 mx-auto mt-8 h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
