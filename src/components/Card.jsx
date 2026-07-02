import React from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

const Card = ({product}) => {
    const { addToCart } = useCart();
  return (
    <div className="w-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      {/* Image */}
      <div className="relative bg-gray-100">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-50 object-cover"
        />

        {/* Wishlist */}
        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-red-500 hover:text-white transition">
          <Heart size={18} />
        </button>

        {/* Badge */}
        <span className="absolute top-4 left-4 bg-violet-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          New
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <p className="text-sm text-violet-600 font-semibold uppercase">
          {product.category}
        </p>

        {/* Product Name */}
        <h2 className="text-2xl font-bold text-gray-800 mt-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2 leading-6 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-4">
          <Star className="fill-yellow-400 text-yellow-400" size={18} />
          <Star className="fill-yellow-400 text-yellow-400" size={18} />
          <Star className="fill-yellow-400 text-yellow-400" size={18} />
          <Star className="fill-yellow-400 text-yellow-400" size={18} />
          <Star className="text-yellow-400" size={18} />

          <span className="ml-2 text-gray-600 text-sm">(4.2)</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mt-6">
          <div>
            <h3 className="text-3xl font-bold text-violet-700">
              ₹{product.price}
            </h3>

            <p className="text-gray-400 line-through">
              ₹{product.price}
            </p>
          </div>

          <button onClick={() => addToCart(product)} className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-5 py-3 rounded-xl transition">
            <ShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;