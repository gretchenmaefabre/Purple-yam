import React from "react";
import logo from "../assets/logo.png"; 
// Importing icons from HeroIcons (Outline version)
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon 
} from "@heroicons/react/24/outline";

export const Footer = () => {
  return (
    
    <footer id="footer" className="bg-[#1a1a1a] text-white py-16 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          
          <div className="flex flex-col gap-6">
           
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
              <div>
                <h3 className="font-bold text-2xl tracking-tight text-white leading-tight">Purple Yam</h3>
                <p className="text-white text-[10px] uppercase tracking-[2px] font-medium">
                  Home Made Cakes & Pastries
                </p>
              </div>
            </div>

            
            <div className="flex gap-4 mt-2 items-center">
              {/* Facebook Link */}
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#e2b198] flex items-center justify-center text-white hover:bg-white hover:text-[#e2b198] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>

              
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#e2b198] flex items-center justify-center text-white hover:bg-white hover:text-[#e2b198] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.072-4.949-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#e2b198] flex items-center justify-center text-white hover:bg-white hover:text-[#e2b198] transition-all duration-300"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.42-.14 1.01.23 2.08.94 2.82.65.7 1.61 1.08 2.59 1.05.93-.03 1.84-.44 2.44-1.15.65-.74.91-1.72.89-2.69-.03-4.14-.01-8.28-.01-12.41z"/>
                </svg>
              </a>
            </div>
          </div>

          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#e2b198] transition-colors duration-200">Home</a></li>
              <li><a href="#our-cakes" className="hover:text-[#e2b198] transition-colors duration-200">Our Cakes</a></li>
              <li><a href="#" className="hover:text-[#e2b198] transition-colors duration-200">Custom Orders</a></li>
              <li><a href="#" className="hover:text-[#e2b198] transition-colors duration-200">About</a></li>
              <li><a href="#" className="hover:text-[#e2b198] transition-colors duration-200">FAQs</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="flex flex-col gap-5 text-gray-400 text-sm">
              <li>
                
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Purple+Yam+National+Hwy+Gingoog+City" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 leading-relaxed hover:text-white transition-colors group"
                >
                  <MapPinIcon className="w-5 h-5 text-[#e2b198] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>National Hwy, 9014 Gingoog City, Philippines</span>
                </a>
              </li>
              
             
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-[#e2b198] shrink-0" />
                <a href="tel:+639123456789" className="hover:text-white transition-colors">+63 912 345 6789</a>
              </li>

              
              <li className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-[#e2b198] shrink-0" />
                <a href="mailto:hello@purpleyam.ph" className="hover:text-white transition-colors">hello@purpleyam.ph</a>
              </li>

              
              <li className="flex items-center gap-3">
                <ClockIcon className="w-5 h-5 text-[#e2b198] shrink-0" />
                <span>Mon - Sat, 8AM - 6PM</span>
              </li>
            </ul>
          </div>

          
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="font-bold text-lg mb-4 text-white">Ready to Order?</h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Get in touch with us to place your order or discuss custom cake designs!
            </p>
            
            <button className="w-full bg-[#e2b198] text-[#ffffff] font-bold py-3 px-6 rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 mb-4 shadow-lg shadow-black/20">
              Message Us on Facebook
            </button>
           
            <a href="#" className="text-gray-400 text-xs underline decoration-[#e2b198] underline-offset-4 hover:text-white transition-colors duration-200">
              Or DM us on Instagram
            </a>
          </div>

        </div>

        
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-[10px] tracking-widest uppercase font-medium">
            © 2026 Purple Yam Home Made Cakes & Pastries - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};