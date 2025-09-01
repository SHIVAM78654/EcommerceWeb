import React from "react";
import { motion } from "framer-motion";

function CategorySection() {
  const categories = [
    { title: "Men's Fashion", img: "/mens.jpg" },
    { title: "Women's Wear", img: "/womens_wear.jpg" },
    { title: "Electronics", img: "/electronis.jpg" },
    { title: "Home & Kitchen", img: "/kitchen.jpg" },
    { title: "Beauty & Health", img: "/beautiy_health.jpg" },
    { title: "Footwear", img: "/footwear.jpg" },
    { title: "Mobile Accessories", img: "/mobile.jpg" },
    { title: "Toys & Baby", img: "/toys.jpg" },
  ];

  return (
    <section className="py-16 relative bg-gradient-to-b from-[#ffecd2] via-[#fcb69f] to-[#ffdde1]">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-[250px] h-[250px] bg-yellow-300/30 blur-[100px] rounded-full top-[5%] left-[-80px] animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-pink-400/20 blur-[120px] rounded-full bottom-[0%] right-[-120px] animate-ping"></div>
        <div className="absolute w-[200px] h-[200px] bg-purple-300/30 blur-[80px] rounded-full bottom-[20%] left-[30%] animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-400 animate-textGlow">
          Discover Your <span className="text-white">Favorites</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-500 cursor-pointer"
            >
              <div className="relative w-full h-44 overflow-hidden">
                <motion.img
                  src={cat.img}
                  alt={cat.title}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover object-center transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-md font-bold text-gray-800 group-hover:text-pink-600">
                  {cat.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CategorySection;
