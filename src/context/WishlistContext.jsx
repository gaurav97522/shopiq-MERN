import React from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";

const Wishlist = () => {
  const wishlist = [
    {
      id: 1,
      title: "Nike Air Max",
      category: "Sneakers",
      price: 4999,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 2,
      title: "Apple Watch",
      category: "Electronics",
      price: 24999,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
    },
    {
      id: 3,
      title: "Gaming Headphones",
      category: "Accessories",
      price: 3999,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">❤️ My Wishlist</h1>
        <p className="text-gray-400 mt-2">
          Your favourite products in one place.
        </p>
      </div>

     {/* Wishlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-violet-500/30 hover:-translate-y-2 transition duration-300"
          >
            {/* Image */}
            <div className="relative bg-gray-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover"
              />

              <button className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full shadow-lg">
                <Heart size={18} fill="white" />
              </button>
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="text-violet-600 text-sm font-semibold uppercase">
                {item.category}
              </p>

              <h2 className="text-xl font-bold mt-2">{item.title}</h2>

              <div className="flex items-center gap-2 mt-3">
                <Star
                  className="fill-yellow-400 text-yellow-400"
                  size={18}
                />
                <span className="text-gray-600">{item.rating}</span>
              </div>

              <h3 className="text-3xl font-bold text-violet-700 mt-5">
                ₹{item.price}
              </h3>

              {/* Buttons */}
              <div className="flex gap-3 mt-6">
                <button className="flex-1 bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>

                <button className="px-4 border border-red-500 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;