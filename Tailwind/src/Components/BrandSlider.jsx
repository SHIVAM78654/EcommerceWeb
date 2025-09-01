import React from "react";

const brands = [
  "/brands/nike.png",
  "/brands/gucci.png",
  "/brands/adidas.png",
  "/brands/lv.png",
  "/brands/puma.png",
  "/brands/zara.png",
  "/brands/prada.png",
  "/brands/ck.png",
];

const BrandSlider = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#fff8d0] via-[#fef3c7] to-[#f9e79f] py-12 overflow-hidden relative">
      <h2 className="text-center text-4xl font-extrabold text-yellow-900 mb-10 tracking-widest drop-shadow-lg">
        ✨ Trusted by Elite Brands ✨
      </h2>

      {/* Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-infinite-scroll gap-16 px-8">
          {[...brands, ...brands].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brand ${index}`}
              className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 drop-shadow-lg hover:scale-110"
            />
          ))}
        </div>
      </div>

      {/* Side Gradient Fades */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#fff8d0] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#fff8d0] to-transparent z-10" />
    </section>
  );
};

export default BrandSlider;
