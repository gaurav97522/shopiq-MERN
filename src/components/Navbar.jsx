import React from "react";
import { Heart, ShoppingCart, User, Search } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useCart();
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Left Section - Logo */}
        <Link to="/">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center text-white font-bold text-xl">
            S
          </div>

          <h1 className="text-3xl font-bold text-white tracking-wide">
            Shopiq
          </h1>
        </div>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* Search */}
          <div className="relative hidden md:block">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search products..."
              className="w-72 bg-white/10 border border-white/20 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-violet-500"
            />
          </div>

          {/* Wishlist */}
          <Link to="/wishlist">
          <button className="p-3 rounded-xl bg-white/10 hover:bg-violet-600 transition duration-300">
            <Heart className="text-white" size={22} />
          </button>
          </Link>

          {/* Cart */}
          <Link to="/cart">
            <button className="relative p-3 rounded-xl bg-white/10 hover:bg-violet-600 transition duration-300">
              <ShoppingCart className="text-white" size={22} />

              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                <span>{cartItems.length}</span>
              </span>
            </button>
          </Link>

          {/* Account */}
          <Link to="/account">
          <button className="p-3 rounded-xl bg-white/10 hover:bg-violet-600 transition duration-300">
            <User className="text-white" size={22} />
          </button>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;