import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function PromoSection() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      ref={ref}
      className="w-full py-40 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden relative"
    >
      {/* Magical Futuristic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-40 h-40 bg-[#7f5af0] rounded-full filter blur-3xl opacity-50 animate-ping"></div>
        <div className="absolute top-[70%] right-[10%] w-60 h-60 bg-[#2cb67d] rounded-full filter blur-2xl opacity-40 animate-spin-slow"></div>
        <div className="absolute top-[40%] left-[40%] w-52 h-52 bg-[#ff8906] rounded-full filter blur-3xl opacity-40 animate-bounce"></div>
        <div className="absolute bottom-[20%] left-[20%] w-32 h-32 bg-[#ff006e] rounded-full filter blur-2xl opacity-30 animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00ffe7] via-[#8a2be2] to-[#ff00ff] animate-textGlow drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] tracking-tight"
        >
          Enter The Realm of Magic
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-8 text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          Elevate your senses with an experience that blends futuristic allure with timeless luxury.
        </motion.p>

        {/* Floating Magical Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.3, delay: 0.6 }}
          className="mt-20 mx-auto w-full max-w-3xl bg-[#1e1e2f] border border-[#ffffff18] rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.1)] p-10 text-[#cbd5e1] text-lg relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#00fff7]/10 via-[#8a2be2]/10 to-[#ff00ff]/10 opacity-40"></div>
          <div className="relative z-10">
            Discover realms of wonder where innovation meets enchantment — created to captivate your imagination.
          </div>
        </motion.div>

        {/* Futuristic Orbs */}
        <div className="absolute top-[12%] left-[15%] w-2.5 h-2.5 bg-[#00ffe7] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[18%] right-[18%] w-3 h-3 bg-[#8a2be2] rounded-full animate-bounce"></div>
        <div className="absolute top-[30%] right-[35%] w-4 h-4 bg-[#ff00ff] rounded-full animate-ping"></div>
        <div className="absolute bottom-[30%] left-[28%] w-2 h-2 bg-[#2cb67d] rounded-full animate-ping"></div>
        <div className="absolute top-[50%] left-[50%] w-3 h-3 bg-[#ff006e] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[35%] right-[40%] w-4 h-4 bg-[#ffff00] rounded-full animate-bounce"></div>
      </div>
    </section>
  );
}

export default PromoSection;
