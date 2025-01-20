import React from "react";
import CompanyLogo1 from '../../public/assets/Fictional company logo (2).png';
import CompanyLogo2 from '../../public/assets/Fictional company logo.png';
import CompanyLogo3 from '../../public/assets/Fictional company logo (1).png';
import CompanyLogo4 from '../../public/assets/Fictional company logo (3).png';
import CompanyLogo5 from '../../public/assets/Fictional company logo (5).png';
import CompanyLogo6 from '../../public/assets/Fictional company logo (4).png';

const SocialProof = () => {
  return (
    <div className="text-center my-8">
      <p className="text-gray-500 text-lg font-semibold mb-4">
        Join 4,000+ companies already growing
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <img
          src={CompanyLogo1} // Use imported logo here
          alt="Boltshift"
          className="w-36 h-auto"
        />
        <img
          src={CompanyLogo2} // Use imported logo here
          alt="Lightbox"
          className="w-36 h-auto"
        />
        <img
          src={CompanyLogo3} // Use imported logo here
          alt="FeatherDev"
          className="w-36 h-auto"
        />
        <img
          src={CompanyLogo4} // Use imported logo here
          alt="Spherule"
          className="w-36 h-auto"
        />
        <img
          src={CompanyLogo5} // Use imported logo here
          alt="GlobalBank"
          className="w-36 h-auto"
        />
        <img
          src={CompanyLogo6} // Use imported logo here
          alt="Nietzsche"
          className="w-36 h-auto"
        />
      </div>
    </div>
  );
};

export default SocialProof;
