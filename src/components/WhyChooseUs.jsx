import React from "react";
import containerImage from "../assets/flan.png"; 
import containerImage1 from "../assets/purpleyam.png"; 
import containerImage2 from "../assets/celebs.png";

const featureItems = [
  {
    emoji: "🍠",
    title: "Real Ube Flavor",
    description: "We use authentic ube halaya, no artificial flavoring",
    showDivider: true,
  },
  {
    emoji: "🧁",
    title: "Baked Fresh Daily",
    description: "No preservatives, no shortcuts, just real ingredients",
    showDivider: true,
  },
  {
    emoji: "🎨",
    title: "Custom Designs",
    description: "Your dream cake, our hands",
    showDivider: true,
  },
  {
    emoji: "📦",
    title: "Safe & Timely Delivery",
    description: "Handled with extra care straight to your door",
    showDivider: false,
  },
];

export const WhyChooseUs = () => {
  return (
    <section 
      className="w-full bg-[#fff4ea] py-20 px-8 md:px-24 flex flex-col lg:flex-row items-center justify-between gap-16 overflow-hidden"
      aria-labelledby="why-purple-yam-heading"
    >
      
      <div className="flex flex-col max-w-xl z-10">
        <header className="mb-12">
          <p className="font-sans font-bold text-[#825c52] text-sm tracking-[1.5px] uppercase mb-4">
            WHY PURPLE YAM
          </p>
          <h2 
            id="why-purple-yam-heading"
            className="text-[#4a1a6e] text-5xl md:text-6xl leading-[1.1] font-normal"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Homemade Goodness, Every Time
          </h2>
        </header>

        <div className="flex flex-col gap-8" role="list">
          {featureItems.map((item) => (
            <article key={item.title} className="group" role="listitem">
              <div className="flex items-start gap-6 pb-6">
                <span className="text-4xl" aria-hidden="true">{item.emoji}</span>
                <div className="flex flex-col">
                  <h3 className="text-[#4a1a6e] font-bold text-xl leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#4a5565] text-base mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
              {item.showDivider && (
                <div className="w-full h-px bg-[#c9a8e8]/30" />
              )}
            </article>
          ))}
        </div>

        <a 
          href="#our-cakes"
          className="inline-flex items-center gap-2 mt-10 group"
        >
          <span className="font-bold text-[#825c52] text-lg border-b-2 border-transparent group-hover:border-[#825c52] transition-all">
            Start your custom order
          </span>
          <span className="text-[#825c52] text-xl transform group-hover:translate-x-2 transition-transform">
            →
          </span>
        </a>
      </div>

      
      <div className="relative w-full max-w-[600px] grid grid-cols-2 gap-4 h-fit">
        
        
        <div className="col-span-2 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
          <div className="bg-white p-3 shadow-2xl rounded-sm">
            <img 
              src={containerImage}
              alt="Leche Flan Cake"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        
        <div className="transform rotate-3 translate-y-[-10px] hover:rotate-0 transition-transform duration-300">
          <div className="bg-white p-2 shadow-xl rounded-sm">
            <img 
              src={containerImage1}
              alt="Purple Yam Cake"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        
        <div className="transform -rotate-6 translate-y-[-20px] hover:rotate-0 transition-transform duration-300">
          <div className="bg-white p-2 shadow-xl rounded-sm">
            <img 
              src={containerImage2}
              alt="Happy Customers"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        
        <div className="absolute -top-6 -right-2 text-5xl animate-bounce hidden md:block">
          😋
        </div>
      </div>
    </section>
  );
};