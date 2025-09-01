import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import { useAuth } from "../path/to/authContext";

const initialCartItems = [
  {
    id: 1,
    name: "Stylish Jacket",
    quantity: 1,
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "Casual Sneakers",
    quantity: 2,
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1542068829-1115f7259450?auto=format&fit=crop&w=150&q=80",
  },
];

function CartPage() {
  const [items, setItems] = useState(initialCartItems);

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemove = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, newQty) => {
    if (newQty < 1) return;
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0a0a23] via-[#1a0033] to-[#000] text-white p-8 max-w-6xl mx-auto rounded-lg shadow-[0_0_40px_rgba(255,0,255,0.5)]">
      <h1 className="flex items-center gap-3 text-5xl font-extrabold mb-12 text-yellow-400 drop-shadow-lg shadow-pink-500/50">
        <FiShoppingCart />
        Your Cart
      </h1>

      {items.length === 0 ? (
        <div className="text-center text-gray-400 text-xl mt-20">
          Your cart is empty.
          <Link
            to="/"
            className="block mt-4 text-[#00c2ff] hover:text-[#00ffd5] transition duration-200 font-semibold"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-8">
            {items.map(({ id, name, quantity, price, image }) => (
              <div
                key={id}
                className="flex flex-col md:flex-row items-center gap-6 bg-[#111122] rounded-xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl border border-[#ff00ff]"
                />

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-semibold tracking-wide">{name}</h3>
                  <p className="text-yellow-400 font-bold text-xl mt-1">
                    ${(price * quantity).toFixed(2)}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-3 bg-[#1a0033] px-4 py-2 rounded-full shadow-inner shadow-pink-900/50">
                    <button
                      onClick={() => handleQuantityChange(id, quantity - 1)}
                      className="bg-[#00c2ff] text-black rounded-full px-4 py-1 text-2xl font-bold hover:bg-[#00ffd5] transition"
                      aria-label={`Decrease quantity of ${name}`}
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) =>
                        handleQuantityChange(id, Number(e.target.value))
                      }
                      className="w-16 text-center rounded-full bg-[#292a45] text-white font-semibold text-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#ff00ff]"
                      aria-label={`Quantity of ${name}`}
                    />
                    <button
                      onClick={() => handleQuantityChange(id, quantity + 1)}
                      className="bg-[#00c2ff] text-black rounded-full px-4 py-1 text-2xl font-bold hover:bg-[#00ffd5] transition"
                      aria-label={`Increase quantity of ${name}`}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(id)}
                  className="text-red-500 hover:text-red-700 transition-colors duration-300 p-3 rounded-full bg-[#33002e] hover:bg-[#ff00ff]/30 shadow-lg shadow-pink-600/40"
                  aria-label={`Remove ${name} from cart`}
                  title="Remove item"
                >
                  <FiTrash2 size={28} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-yellow-400 font-extrabold text-3xl tracking-wide drop-shadow-lg shadow-pink-500/60">
            <span>Total Price:</span>
            <span className="mt-3 md:mt-0 bg-gradient-to-r from-[#ffd700] via-[#ff00ff] to-[#00ffff] rounded-lg px-6 py-3 text-black shadow-lg">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <div className="mt-10 flex justify-end">
            <Link
              to="/checkout"
              className="bg-gradient-to-r from-[#ffd700] via-[#ff00ff] to-[#00ffff] text-black font-extrabold px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition duration-200"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
