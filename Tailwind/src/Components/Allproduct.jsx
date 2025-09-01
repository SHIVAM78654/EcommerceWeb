import React from 'react';

const products = [
  {
    id: 1,
    name: 'Smart Watch',
    price: '₹1,999',
    image: 'https://images.unsplash.com/photo-1603398938378-d0d6a4ebf9ed?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    name: 'Wireless Earbuds',
    price: '₹899',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    name: 'Gaming Mouse',
    price: '₹799',
    image: 'https://images.unsplash.com/photo-1617893811446-7fdff7f2f6ed?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    price: '₹1,299',
    image: 'https://images.unsplash.com/photo-1613420542681-bb929d3306f3?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 5,
    name: 'Portable SSD',
    price: '₹3,999',
    image: 'https://images.unsplash.com/photo-1603274758243-f84a5b3c4908?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 6,
    name: 'Fitness Tracker',
    price: '₹1,499',
    image: 'https://images.unsplash.com/photo-1570819174756-7d91f58c3b94?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 7,
    name: 'Laptop Stand',
    price: '₹599',
    image: 'https://images.unsplash.com/photo-1616627452227-1d6781c47b45?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 8,
    name: 'Mechanical Keyboard',
    price: '₹2,499',
    image: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 9,
    name: 'Noise Cancelling Headphones',
    price: '₹4,199',
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 10,
    name: 'Mini Projector',
    price: '₹5,999',
    image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 11,
    name: 'USB-C Hub',
    price: '₹1,199',
    image: 'https://images.unsplash.com/photo-1580894894519-fdfb78d1f70f?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 12,
    name: 'LED Desk Lamp',
    price: '₹699',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 13,
    name: 'Phone Tripod',
    price: '₹399',
    image: 'https://images.unsplash.com/photo-1551817958-b8df67407a5c?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 14,
    name: 'Webcam',
    price: '₹1,799',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 15,
    name: 'Ring Light',
    price: '₹999',
    image: 'https://images.unsplash.com/photo-1614624532983-0c74a5fd8d62?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 16,
    name: 'Wireless Charger',
    price: '₹699',
    image: 'https://images.unsplash.com/photo-1611078489935-0cb964c7d1cf?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 17,
    name: 'VR Headset',
    price: '₹7,999',
    image: 'https://images.unsplash.com/photo-1607082349510-bb688f4c1b1b?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 18,
    name: 'Graphic Tablet',
    price: '₹2,299',
    image: 'https://images.unsplash.com/photo-1612550761233-91a6c7c1f626?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 19,
    name: 'Action Camera',
    price: '₹3,999',
    image: 'https://images.unsplash.com/photo-1519183071298-a2962ae0b2cf?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 20,
    name: 'Smart Bulb',
    price: '₹499',
    image: 'https://images.unsplash.com/photo-1615797311376-03dc1d4d97f0?auto=format&fit=crop&w=800&q=60',
  },
];

const AllProducts = () => {
  return (
    <div id="all-products" className="px-8 py-16 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] min-h-screen">

      <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-14 underline decoration-wavy decoration-orange-400">
        Our Best Sellers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover rounded-t-3xl"
            />
            <div className="p-5 flex flex-col items-start">
              <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
              <p className="text-lg text-gray-500 mt-1">{product.price}</p>
              <button className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-purple-600 hover:to-pink-500 transition-all duration-300">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
