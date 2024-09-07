import React from "react";

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {/* Product Item */}
      <div className="relative">
        <img
          src="https://th.bing.com/th/id/R.7f85526a7a53adcfe87e5b2c747610fd?rik=RVVQqCzSm9KhVA&pid=ImgRaw&r=0"
          alt="PlayStation 5"
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-lg font-bold">PlayStation 5</h2>
          <p>Black and White version of the PS5 coming out on sale.</p>
          <button className="mt-2 px-4 py-2 bg-black text-white rounded">Shop Now</button>
        </div>
      </div>

      {/* Women's Collections */}
      <div className="relative">
        <img
          src="https://th.bing.com/th/id/OIP.nz5oHN9UggnrHrf1XGBnVgAAAA?w=162&h=195&c=7&r=0&o=5&pid=1.7"
          alt="Women's Collections"
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-lg font-bold">Women's Collections</h2>
          <p>Featured women's collections that give you another vibe.</p>
          <button className="mt-2 px-4 py-2 bg-black text-white rounded">Shop Now</button>
        </div>
      </div>

      {/* Speakers */}
      <div className="relative">
        <img
          src="https://th.bing.com/th/id/OIP.Vk9SUatsyXEKDOwhZQxZqQHaHa?w=181&h=181&c=7&r=0&o=5&pid=1.7"
          alt="Speakers"
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-lg font-bold">Speakers</h2>
          <p>Amazon wireless speakers.</p>
          <button className="mt-2 px-4 py-2 bg-black text-white rounded">Shop Now</button>
        </div>
      </div>

      {/* Perfume */}
      <div className="relative">
        <img
          src="https://example.com/perfume.jpg"
          alt="Perfume"
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-lg font-bold">Perfume</h2>
          <p>GUCCI INTENSEOUD EDP</p>
          <button className="mt-2 px-4 py-2 bg-black text-white rounded">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
