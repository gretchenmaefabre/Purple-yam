import React from "react";
import cake1 from "../assets/ubemacapuno.jpg"; 
import cake2 from "../assets/classic.jpg";
import cake3 from "../assets/bento.jpg";
import cake4 from "../assets/cheesecake.jpg";
import cake5 from "../assets/ensaymada.jpg";
import cake6 from "../assets/custom.jpg";

const products = [
  {
    id: 1,
    name: "Ube Macapuno Cake",
    category: "Whole Cakes",
    description: "A soft and moist ube cake layered with creamy ube frosting and sweet macapuno strings, delivering a rich, nutty, and indulgent Filipino dessert experience",
    price: "₱350",
    image: cake1,
  },
  {
    id: 2,
    name: "Ube Classic Cake",
    category: "Whole Cakes",
    description: "A soft and fluffy ube cake with smooth, creamy frosting, offering a rich purple yam flavor that’s simple, classic, and satisfying",
    price: "₱380",
    image: cake2,
  },
  {
    id: 3,
    name: "Ube Leche Flan Cake",
    category: "Bento",
    description: "A mini ube cake topped with rich, creamy leche flan, combining soft purple yam layers with a sweet caramel custard for a perfectly indulgent bite-sized treat",
    price: "₱420",
    image: cake3,
  },
  {
    id: 4,
    name: "Ube Cheesecake",
    category: "Cheesecake",
    description: "A creamy and velvety cheesecake infused with rich ube flavor, sitting on a buttery crust and topped with a smooth purple yam layer for a perfectly sweet and tangy Filipino-inspired dessert",
    price: "₱390",
    image: cake4,
  },
  {
    id: 5,
    name: "Ube Ensaymada",
    category: "Cinnamon Rolls",
    description: "A soft, fluffy ensaymada infused with rich ube flavor, topped with creamy butter, sugar, and grated cheese for a sweet, savory, and uniquely Filipino pastry treat",
    price: "₱450",
    image: cake5,
  },
  {
    id: 6,
    name: "Custom Celebration",
    category: "Custom",
    description: "Your dream cake made exactly how you want it",
    price: "₱500",
    image: cake6,
  },
];

const ProductCard = ({ product }) => {
  return (
    <article className="flex flex-col bg-[#dbae9c] rounded-[20px] overflow-hidden border-4 border-transparent hover:border-[#4a1a63] transition-all duration-300 shadow-lg">
     
      <div 
        className="w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${product.image})` }}
        role="img"
        aria-label={product.name}
      />

      
      <div className="p-6 flex flex-col flex-1 gap-3">
       
        <div className="w-fit px-3 py-1 bg-[#c9a8e8] rounded-full">
          <span className="font-sans font-semibold text-[#4a1a63] text-sm tracking-wide">
            {product.category}
          </span>
        </div>

        
        <h3 
          className="text-[#4a1a63] text-2xl font-normal leading-tight"
          style={{ fontFamily: "'Fredoka One', cursive" }}
        >
          {product.name}
        </h3>

       
        <p className="text-[#4a5565] font-sans text-sm leading-relaxed min-h-[40px]">
          {product.description}
        </p>

        
        <div className="flex items-center justify-between mt-auto pt-4">
          <span className="font-sans font-bold text-[#fdf8f3] text-2xl">
            {product.price}
          </span>

          <button
            type="button"
            aria-label={`Order ${product.name}`}
            className="px-5 py-2 bg-[#330e3e] text-white rounded-full text-sm font-semibold hover:bg-[#4a1a63] transition-colors active:scale-95"
          >
            Order Now
          </button>
        </div>
      </div>
    </article>
  );
};

export const ProductCatalogSection = () => {
  return (
    <section 
      className="max-w-7xl mx-auto px-6 py-12"
      aria-label="Product Catalog"
    >
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};