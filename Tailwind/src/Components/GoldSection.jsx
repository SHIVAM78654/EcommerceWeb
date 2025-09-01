import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Men's Gold",
    img: "/goldimg/men.jpg",
  },
  {
    title: "Women's Gold",
    img: "/goldimg/women.jpg",
  },
  {
    title: "Royal Products",
    img: "/goldimg/gold1.jpg",
  },
  {
    title: "Premium Trust",
    img: "/goldimg/gold2.jpg",
  },
];

const GoldSection = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/banner.jpg"
        alt="Main"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/20 to-transparent z-10" />

      {/* Cards on Right in 2x2 Grid */}
      <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center justify-end pr-6">
        <div className="grid grid-cols-2 gap-4">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="w-36 h-36 bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl transition hover:-translate-y-1"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-20 object-cover"
              />
              <div className="p-2 text-center">
                <h3 className="text-xs font-semibold text-yellow-800 tracking-wide">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Golden Button - Bottom Left */}
      <div className="absolute bottom-10 left-50 z-40">
        <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white font-bold rounded-full shadow-xl border border-yellow-300 hover:from-yellow-500 hover:to-yellow-700 transition duration-300 text-lg tracking-wide">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default GoldSection;
