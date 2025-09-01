import React from "react";
import { FaShippingFast, FaLock, FaTag, FaHeadset } from "react-icons/fa";

function FeatureSection() {
  const features = [
    {
      title: "Fast Delivery",
      desc: "Get your orders delivered quickly with our lightning-fast logistics.",
      icon: <FaShippingFast className="text-indigo-600 text-4xl mb-4" />,
    },
    {
      title: "Secure Payment",
      desc: "Safe and secure checkout using the latest encryption technologies.",
      icon: <FaLock className="text-indigo-600 text-4xl mb-4" />,
    },
    {
      title: "Best Prices",
      desc: "Unbeatable deals and offers you won’t find anywhere else.",
      icon: <FaTag className="text-indigo-600 text-4xl mb-4" />,
    },
    {
      title: "24/7 Support",
      desc: "Our team is always available to assist you, day or night.",
      icon: <FaHeadset className="text-indigo-600 text-4xl mb-4" />,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white via-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
          Why <span className="text-indigo-600">Shop With Us</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 ease-in-out"
            >
              {feature.icon}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
