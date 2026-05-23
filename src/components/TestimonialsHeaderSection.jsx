import React from "react";

export const TestimonialsHeaderSection = () => {
  return (
    <header className="flex flex-col items-center gap-3 mb-24 w-full">
      <p className="font-sans font-semibold text-[#c9a8e8] text-[13px] tracking-[4px] uppercase opacity-90">
        HAPPY CUSTOMERS
      </p>
      <h2 
        className="text-white text-4xl md:text-6xl font-normal text-center leading-tight tracking-tight"
        style={{ fontFamily: "'Fredoka One', cursive" }}
      >
        Made with Love, Tasted with Joy
      </h2>
    </header>
  );
};