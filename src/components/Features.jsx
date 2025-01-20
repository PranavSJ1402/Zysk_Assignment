import React from "react";
import FeatureIcon1 from '../../public/assets/Featured icon.png';
import FeatureIcon2 from '../../public/assets/Featured icon (5).png';
import FeatureIcon3 from '../../public/assets/Featured icon (4).png';
import FeatureIcon4 from '../../public/assets/Featured icon (1).png';
import FeatureIcon5 from '../../public/assets/Featured icon (2).png';
import FeatureIcon6 from '../../public/assets/Featured icon (3).png';

const featuresData = [
  {
    icon: FeatureIcon1,
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    icon: FeatureIcon2,
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    icon: FeatureIcon3,
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.",
  },
  {
    icon: FeatureIcon4,
    title: "Connect with customers",
    description:
      "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
  },
  {
    icon: FeatureIcon5,
    title: "Connect the tools you already use",
    description:
      "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
  },
  {
    icon: FeatureIcon6,
    title: "Our people make the difference",
    description:
      "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
  },
];

const Features = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-red-500 text-lg md:text-xl font-semibold tracking-wide">Features</h2>
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-2">
          Analytics that feels like it’s from the future
        </h1>
        <p className="text-gray-600 text-sm md:text-lg mt-4">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain
          more users. Trusted by over 4,000 startups.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={feature.icon} // Use the imported icon here
              alt={feature.title}
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-sm md:text-base text-gray-600 mt-3">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
