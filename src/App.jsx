import { useState } from "react";
import logo from "./assets/logo.png";

import { MagnifyingGlassIcon, ShoppingBagIcon, Bars3Icon } from "@heroicons/react/24/outline";

import LandingPage from "./components/LandingPage"; 
import { HeroHeadlineSection } from "./components/HeroHeadlineSection";
import { ProductCatalogSection } from "./components/ProductCatalogSection";
import { ReviewCardsGridSection } from "./components/ReviewCardsGridSection";
import { TestimonialsHeaderSection } from "./components/TestimonialsHeaderSection";
import { WhyChooseUs } from "./components/WhyChooseUs"; 
import { Footer } from "./components/Footer";

function App() {
 
  const [searchValue, setSearchValue] = useState("");

  
  const navItems = [
    { label: "HOME", href: "#" },
    { label: "OUR CAKES", href: "#our-cakes" }, 
    { label: "WHY US", href: "#why-us" },       
    { label: "CONTACT", href: "#footer" },    
  ];

  return (
    
    <main className="w-full bg-white selection:bg-[#e2b198] selection:text-[#3d0d40]">
      
      
      <header className="sticky top-0 w-full flex items-center justify-between px-8 md:px-16 py-4 bg-white/95 backdrop-blur-sm z-50 shadow-sm animate-drop">
        
       
        <div className="flex items-center gap-16">
          <a href="#">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-12 h-12 object-contain cursor-pointer hover:scale-105 transition-transform" 
            />
          </a>
          <nav className="hidden lg:flex gap-10">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="font-bold text-[#3d0d40] text-[11px] tracking-widest hover:text-[#e8722a] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        
        <div className="flex items-center gap-6 flex-1 justify-end max-w-3xl">
          
          <div className="relative hidden sm:block w-full max-w-[400px]">
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search for your favorite cake..."
              className="w-full pl-6 pr-12 py-2.5 rounded-lg bg-[#f3f4f6] text-[#3d0d40] border border-transparent focus:border-[#e2b198] focus:bg-white outline-none text-sm transition-all shadow-inner"
            />
            <MagnifyingGlassIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingBagIcon className="w-7 h-7 text-[#3d0d40]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#e8722a] rounded-full border border-white"></span>
            </button>
            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Bars3Icon className="w-7 h-7 text-[#3d0d40]" />
            </button>
          </div>
        </div>
      </header>

      
      <LandingPage />
      <div className="bg-white">
        <HeroHeadlineSection />
        <ProductCatalogSection />
      </div>

      
      <section className="bg-[#3d0d40] py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <TestimonialsHeaderSection />
          <ReviewCardsGridSection />
        </div>
      </section>

      
      <div id="why-us" className="scroll-mt-20">
        <WhyChooseUs />
      </div>

      
      <Footer />
    </main>
  );
}

export default App;