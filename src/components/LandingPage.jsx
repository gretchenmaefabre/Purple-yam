import frontcake from "../assets/frontcake.png";

const LandingPage = () => {
  return (
    
    <div className="flex flex-col bg-white font-sans selection:bg-[#e2b198] selection:text-[#3d0d40]">
      
      
      <section className="relative min-h-[90vh] bg-[#3d0d40] text-white px-8 md:px-20 flex items-center overflow-hidden">
        
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-4 relative z-10 w-full">
          
          
          <div className="space-y-6 animate-slide-right delay-1000 fill-mode-backwards">
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black leading-[1.1] tracking-tight">
              Taste the Sweetness of <br />
              <span className="text-[#e2b198]">Real Filipino Ube</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-200 font-normal leading-relaxed max-w-md">
              Experience the rich, creamy, and authentic flavor of purple yam —
              proudly grown and crafted in the Philippines.
            </p>
            
           
            <div className="flex flex-wrap gap-4 pt-4">
             
              <button className="px-10 py-3 bg-[#e2b198] text-[#3d0d40] rounded-xl font-bold text-lg hover:brightness-105 transition-all">
                Order Now
              </button>
              
              
              <button className="px-10 py-3 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-[#3d0d40] transition-all">
                Explore more
              </button>
            </div>
          </div>

         
          <div className="flex justify-center md:justify-end animate-slide-left delay-1000 fill-mode-backwards">
            <img
              src={frontcake}
              alt="Ube Cake"
              className="w-auto max-h-[45vh] md:max-h-[60vh] object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>

       
      
        <div className="absolute bottom-0 left-0 w-full leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[120px] md:h-[180px]">
            <path d="M0,40 C200,100 470,120 600,120 C800,120 1000,100 1200,40 L1200,120 L0,120 Z" fill="#e2b198"></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;