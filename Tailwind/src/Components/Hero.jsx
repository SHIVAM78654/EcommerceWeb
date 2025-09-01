import React from "react";
import { motion } from "framer-motion";


const Hero = () => {
     
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#1a120b] py-20 px-6 md:px-10 flex items-center justify-between flex-col-reverse md:flex-row text-white">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[500px] h-[500px] bg-[#ffd700]/10 blur-[120px] rounded-full top-[-200px] left-[-200px] animate-float-slow"></div>
        <div className="absolute w-[400px] h-[400px] bg-[#ff9900]/10 blur-[100px] rounded-full bottom-[-150px] right-[-150px] animate-float-slow-delay"></div>
      </div>

      {/* Twinkling Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-[2px] h-[2px] bg-black rounded-full opacity-50 animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Floating Icons
      <div className="absolute z-0 inset-0 pointer-events-none">
        {[...Array(5)].map((_, index) => (
          <motion.img
            key={`icon-${index}`}
            src="/star.svg"
            alt="icon"
            className="w-6 h-6 absolute animate-float"
            style={{
              top: `${Math.random() * 90 + 5}%`,
              left: `${Math.random() * 90 + 5}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        ))}
      </div> */}

      {/* Content Section */}
      <div className="flex-1 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 animate-textGlow drop-shadow-md">
          Unlock Exclusive Offers Now
        </h1>
        <p className="mt-6 text-xl text-yellow-200 max-w-xl animate-fadeIn delay-1000">
          Explore fashion, electronics, and luxury — curated for your lifestyle.
        </p>

         \<div className="mt-8 flex gap-6">
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => {
      const el = document.getElementById('all-products');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-full text-lg font-extrabold shadow-2xl hover:from-orange-400 hover:to-yellow-300 transition duration-300 animate-pulse border-2 border-yellow-300"
  >
    Start Shopping
  </motion.button>
</div>

      </div>

      {/* Animated Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.3 }}
        className="flex-1 relative z-10 animate-float"
      >
        <div className="relative">
          <img
            src="/Heroo.jpg"
            alt="Shop Now"
            className="rounded-[30px] shadow-[0_30px_60px_rgba(255,215,0,0.5)] w-full max-h-[450px] object-cover ring-4 ring-yellow-300/30 animate-glowImage hover:scale-105 transition-transform duration-700"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-4 right-4 bg-yellow-200 text-black px-4 py-2 text-sm font-bold rounded-full shadow-md"
          >
            Best Seller
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
