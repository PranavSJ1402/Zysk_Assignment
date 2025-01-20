import React, { useState } from "react";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import Avatar1 from '../../public/assets/Avatar (4).png';
import Avatar2 from '../../public/assets/Avatar (2).png';
import Avatar3 from '../../public/assets/Avatar (1).png';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time, and your account will remain active until the end of your billing cycle.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, additional information such as your company name and tax details can be added to your invoice.",
    },
    {
      question: "How does billing work?",
      answer:
        "Billing is done on a monthly basis. You will receive an invoice at the start of each billing cycle.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can update your account email in the settings section of your profile.",
    },
  ];

  return (
    <section className="faq bg-white py-8">
      <div className="container mx-auto px-4 text-center">
        <header className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Frequently asked questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about the product and billing.
          </p>
        </header>
        <div className="questions space-y-4 max-w-2xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="question border-b border-gray-200 pb-4">
              <div
                className="flex justify-between items-center cursor-pointer text-gray-800 font-semibold"
                onClick={() => toggleQuestion(index)}
              >
                <span>{item.question}</span>
                <button className="text-gray-600">
                  {activeQuestion === index ? (
                    <MdRemoveCircleOutline className="text-2xl"/>
                  ) : (
                    <MdAddCircleOutline className="text-2xl"/>
                  )}
                </button>
              </div>
              {activeQuestion === index && (
                <p className="text-gray-600 mt-2 text-justify">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-3xl mx-auto bg-gray-50 mt-10 px-10 text-center py-12">
        {/* Avatar Group */}
        <div className="flex justify-center -space-x-4 mb-6">
          <img
            className="w-10 h-10 rounded-full object-cover border-2 border-white z-20"
            src={Avatar1} // Imported Avatar 1
            alt="Team member 1"
          />
          <img
            className="w-10 h-10 rounded-full object-cover border-2 border-white z-30"
            src={Avatar2} // Imported Avatar 2
            alt="Team member 2"
          />
          <img
            className="w-10 h-10 rounded-full object-cover border-2 border-white z-20"
            src={Avatar3} // Imported Avatar 3
            alt="Team member 3"
          />
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-800">
          Still have questions?
        </h2>
        <p className="text-gray-600 mt-2">
          Can’t find the answer you’re looking for? Please chat with our
          friendly team.
        </p>

        {/* Button */}
        <button className="mt-6 px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default FAQ;
