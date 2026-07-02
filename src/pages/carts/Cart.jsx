import React from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cartItems } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    const FREE = total > 500 ? "FREE" : "₹50";
    const totalWithShipping = total + (FREE === "FREE" ? 0 : 50);
  if (cartItems.length === 0) {
    return (
        
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold">🛒 Your Cart is Empty</h1>

        <p className="text-gray-400 mt-3">
          Looks like you haven't added anything yet.
        </p>

        <button className="mt-8 bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl">
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold text-white mb-10">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Left */}

        <div className="lg:col-span-2 space-y-6">

          {cartItems.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-2xl p-5 flex items-center gap-6 shadow-lg"
            >

              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-32 h-32 object-contain rounded-xl bg-gray-100 p-3"
              />

              <div className="flex-1">

                <p className="text-sm text-violet-600 uppercase font-semibold">
                  {product.category}
                </p>

                <h2 className="text-xl font-bold mt-1">
                  {product.title}
                </h2>

                <p className="text-gray-500 mt-2 line-clamp-2">
                  {product.description}
                </p>

                <h3 className="text-2xl font-bold text-violet-700 mt-4">
                  ₹{product.price}
                </h3>

              </div>

              {/* Quantity */}

              <div className="flex flex-col items-center gap-4">

                <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-3 py-2">

                  <button>
                    <Minus size={18} />
                  </button>

                  <span className="font-semibold">
                    1
                  </span>

                  <button>
                    <Plus size={18} />
                  </button>

                </div>

                <button className="text-red-500 hover:text-red-700">
                  <Trash2 />
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* Right */}

        <div className="bg-white rounded-2xl p-6 shadow-lg h-fit sticky top-24">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">
                {FREE}
              </span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{totalWithShipping}</span>
            </div>

          </div>

          <button className="w-full mt-8 bg-violet-600 hover:bg-violet-700 text-white py-4 rounded-xl text-lg font-semibold transition">
            Proceed to Checkout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Cart;