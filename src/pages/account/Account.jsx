import React from "react";
import {
  User,
  ShoppingBag,
  Heart,
  MapPin,
  Lock,
  Settings,
  LogOut,
  ShoppingCart,
} from "lucide-react";

const Account = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-white mb-8">
        My Account
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Left Profile Card */}
        <div className="bg-white rounded-3xl p-8 shadow-lg text-center">

          <img
            src="https://i.pravatar.cc/200"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-violet-600"
          />

          <h2 className="text-2xl font-bold mt-5">
            Gaurav Vishwakarma
          </h2>

          <p className="text-gray-500 mt-2">
            gaurav@gmail.com
          </p>

          <button className="mt-6 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl transition">
            Edit Profile
          </button>

        </div>

        {/* Right Menu */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-2xl font-bold mb-8">
            Quick Actions
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">

            <button className="flex items-center gap-4 p-5 rounded-2xl border hover:bg-violet-600 hover:text-white transition">
              <ShoppingBag size={24} />
              <span className="font-semibold">My Orders</span>
            </button>

            <button className="flex items-center gap-4 p-5 rounded-2xl border hover:bg-violet-600 hover:text-white transition">
              <Heart size={24} />
              <span className="font-semibold">Wishlist</span>
            </button>

            <button className="flex items-center gap-4 p-5 rounded-2xl border hover:bg-violet-600 hover:text-white transition">
              <ShoppingCart size={24} />
              <span className="font-semibold">My Cart</span>
            </button>

            <button className="flex items-center gap-4 p-5 rounded-2xl border hover:bg-violet-600 hover:text-white transition">
              <MapPin size={24} />
              <span className="font-semibold">Manage Address</span>
            </button>

            <button className="flex items-center gap-4 p-5 rounded-2xl border hover:bg-violet-600 hover:text-white transition">
              <Lock size={24} />
              <span className="font-semibold">Change Password</span>
            </button>

            <button className="flex items-center gap-4 p-5 rounded-2xl border hover:bg-violet-600 hover:text-white transition">
              <Settings size={24} />
              <span className="font-semibold">Settings</span>
            </button>

          </div>

          <button className="mt-10 w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl flex justify-center items-center gap-3 transition">
            <LogOut size={22} />
            Logout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Account;