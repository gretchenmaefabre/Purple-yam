import React from "react";

const review = {
  quote: "Best ube cake I’ve ever had! You can really taste the quality ingredients. It’s like getting a hug from your lola. Will definitely order again!",
  author: "Jose Dela Cruz",
  occasion: "Family Reunion, January 2025",
  rating: 5,
};

export const LeftReviewStackSection = () => {
  return (
    <section 
      aria-label="Customer review" 
      className="max-w-7xl mx-auto px-6 py-10"
    >
      <article className="relative max-w-xl p-8 rounded-[20px] bg-[#4a1a63] border border-white/20 shadow-2xl overflow-hidden">
        
        <div 
          aria-hidden="true"
          className="absolute -top-4 left-4 opacity-20 pointer-events-none font-serif italic text-[120px] leading-none text-[#e8722a]"
        >
          &ldquo;
        </div>

        <div className="relative z-10">
          <blockquote className="mb-6">
            <p className="font-sans italic font-bold text-lg leading-relaxed text-white">
              "{review.quote}"
            </p>
          </blockquote>

          <div className="flex flex-col gap-1">
            <h3 className="font-sans font-bold text-[#e8722a] text-sm uppercase tracking-widest">
              {review.author}
            </h3>
            
            <p className="font-sans text-[#c9a8e8] text-xs">
              {review.occasion}
            </p>

            
            <div 
              aria-label={`${review.rating} out of 5 stars`}
              role="img"
              className="flex mt-2 gap-1"
            >
              {[...Array(review.rating)].map((_, index) => (
                <svg 
                  key={index} 
                  className="w-4 h-4 text-[#e8722a] fill-current" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};