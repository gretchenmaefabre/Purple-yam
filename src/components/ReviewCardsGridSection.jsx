import React from "react";

import starIcon from "../assets/star.png"; 
import { StarIcon } from "@heroicons/react/24/solid";

const reviews = [
  {
    id: 1,
    review: "Best ube cake I’ve ever had! You can really taste the quality ingredients. It’s like getting a hug from your lola. Will definitely order again!",
    author: "JOSE DELA CRUZ",
    occasion: "Family Reunion, January 2026",
  },
  {
    id: 2,
    review: "The texture is perfect—not too sweet, but full of flavor. The delivery was right on time for our celebration. Highly recommended!",
    author: "GRETCHEN FABRE",
    occasion: "Birthday Party, February 2026",
  },
  {
    id: 3,
    review: "I ordered this for my wedding and everyone was asking where it was from. The purple color is so vibrant and the taste is even better!",
    author: "ANNA REYES",
    occasion: "Wedding, March 2026",
  },
  {
    id: 4,
    review: "Authentic Filipino taste! It's hard to find good Ube desserts here, but this exceeded all my expectations. 10/10 would recommend.",
    author: "MARK LIGON",
    occasion: "Office Party, April 2026",
  },
];

export const ReviewCardsGridSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 mt-10">
      {reviews.map((item) => (
        <article 
          key={item.id} 
          className="relative bg-[#3d0d40] rounded-[30px] border border-white/20 p-8 pt-14 shadow-2xl transition-transform hover:scale-[1.02]"
        >
          
          <div className="absolute -top-6 left-8 md:left-12 flex items-center gap-2 bg-[#e8722a] px-5 py-2 rounded-full shadow-lg border border-white/10">
            <img src={starIcon} alt="star" className="w-4 h-4" />
            <span className="text-white font-bold text-[12px] tracking-tight whitespace-nowrap">
              4.9 / 5 — 500+ Reviews
            </span>
          </div>

          
          <div className="relative mb-8">
            <span 
              className="absolute -top-10 -left-2 text-[#e8722a] text-[90px] font-serif opacity-30 select-none leading-none"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              “
            </span>
            <p className="relative z-10 text-white text-[16px] md:text-[18px] leading-relaxed italic font-medium pt-2">
              {item.review}
            </p>
          </div>

          
          <div className="mt-auto space-y-4">
            <div>
              <h4 className="text-[#e8722a] font-bold text-[14px] tracking-widest uppercase">
                {item.author}
              </h4>
              <p className="text-[#c9a8e8] text-[11px] font-medium opacity-80">
                {item.occasion}
              </p>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-[#e8722a]" />
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};