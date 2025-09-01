import React from "react";
import { motion } from "framer-motion";

const FancyShowcase = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#1a120b] flex items-center justify-center text-white">
      {/* Animated Floating Sparkles */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-70 animate-sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Animated Floating Glows */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#ffd700]/10 blur-[120px] rounded-full top-[-200px] left-[-200px] animate-float-slow"></div>
        <div className="absolute w-[400px] h-[400px] bg-[#ff9900]/10 blur-[100px] rounded-full bottom-[-150px] right-[-150px] animate-float-slow-delay"></div>
      </div>

      {/* Decorative Twinkling Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-50 animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-[80px] h-[2px] bg-gradient-to-r from-white to-transparent opacity-60 animate-shootingStar"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          ></div>
        ))}
      </div>

      {/* Animated Halo Ring */}
      <div className="absolute z-0 w-96 h-96 border-4 border-yellow-400/20 rounded-full animate-spin-slow"></div>

      {/* Extra Floating Icons or Elements */}
      <div className="absolute z-0 w-full h-full pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`icon-${i}`}
            className="absolute text-yellow-300 text-xl animate-floatIcon"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Light Rays */}
      <div className="absolute w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-yellow-300/50 to-transparent animate-lightRay"></div>
        <div className="absolute left-1/3 top-0 w-[1px] h-full bg-gradient-to-b from-yellow-500/30 to-transparent animate-lightRay delay-1000"></div>
        <div className="absolute left-2/3 top-0 w-[1px] h-full bg-gradient-to-b from-orange-400/30 to-transparent animate-lightRay delay-2000"></div>
      </div>

      {/* Card with Glow and Float */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 bg-[#292018]/60 border border-[#facc15]/30 backdrop-blur-xl shadow-2xl rounded-3xl px-10 py-16 max-w-2xl w-full text-center animate-float animate-bounce-slow"
      >
        {/* Title with Sparkling Effect */}
        <motion.h2
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.3 }}
          className="text-5xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 shimmer-text drop-shadow-md animate-textGlow"
        >
          DARE TO STAND OUT
        </motion.h2>

        <motion.p
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="mt-6 text-lg tracking-wide text-yellow-200 animate-fadeIn delay-1000"
        >
          A section crafted to hypnotize your audience. Smooth motion. Gold vibes. Pure class.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow-md hover:from-orange-400 hover:to-yellow-400 transition border border-yellow-300 animate-pulse"
        >
          Explore Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default FancyShowcase;
