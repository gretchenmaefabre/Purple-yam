export const HeroHeadlineSection = () => {
  return (
    
    <section 
      id="our-cakes"
      className="flex flex-col items-center justify-center w-full py-24 px-6 bg-white"
      aria-labelledby="hero-headline-title"
    >
      
      <div className="animate-fade-up opacity-0 [animation-fill-mode:forwards] text-center font-sans font-semibold leading-5 tracking-[0.2em] text-[#e8722a] text-sm">
        OUR BAKED GOODS
      </div>
      
      
      <h2 
        id="hero-headline-title"
        className="animate-fade-up opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms] mt-5 text-center font-bold text-5xl md:text-6xl tracking-tight text-[#4a1a63]"
        style={{ fontFamily: "'Fredoka One', cursive, sans-serif" }}
      >
        Pick Your Favorite
      </h2>
      
     
      <p className="animate-fade-up opacity-0 [animation-fill-mode:forwards] [animation-delay:400ms] mt-5 max-w-2xl text-center font-sans text-lg md:text-xl font-normal leading-relaxed text-[#4a5565]">
        From classic ube to custom creations — there's something for every sweet tooth.
      </p>
    </section>
  );
};