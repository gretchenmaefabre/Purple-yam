import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const review = {
  quote: "Best ube cake I’ve ever had! You can really taste the quality ingredients. It’s like getting a hug from your lola. Will definitely order again!",
  author: "Jose Dela Cruz",
  occasion: "Family Reunion, January 2025",
  rating: 5,
};

export const RightReviewStackSection = () => {
  return (
    <section 
      aria-label="Customer review" 
      className="flex justify-end w-full px-6 py-8"
    >
      <article className="relative w-full max-w-[571px] p-8 rounded-[20px] bg-[#3d0d40] border border-white/20 shadow-xl transition-transform hover:scale-[1.02]">
        
        
        <div className="relative h-[117px] w-full mb-4">
          <span
            aria-hidden="true"
            className="absolute top-0 left-0 text-[#e8722a] text-8xl font-serif italic opacity-50 select-none"
          >
            &ldquo;
          </span>
          <p className="relative z-10 pt-6 pl-4 text-white italic text-base leading-relaxed font-medium">
            {review.quote}
          </p>
        </div>

        
        <div className="mt-6 pl-4">
          <h3 className="text-[#e8722a] font-bold text-sm uppercase tracking-widest">
            {review.author}
          </h3>
          
          <p className="text-[#c9a8e8] text-xs mt-1">
            {review.occasion}
          </p>

          
          <div
            aria-label={`${review.rating} out of 5 stars`}
            className="flex items-center gap-1 mt-3"
            role="img"
          >
            {[...Array(review.rating)].map((_, index) => (
              <StarIcon 
                key={index} 
                className="h-4 w-4 text-[#e8722a]" 
              />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};