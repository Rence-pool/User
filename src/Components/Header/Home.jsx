import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import ict from '../../assets/ict.jpg';
import shs from '../../assets/shs.webp';
import bshm from '../../assets/bshm.jpg';
import bstm from '../../assets/bstm.webp';
import bacomm from '../../assets/bacomm.jpg';
import bsba from '../../assets/bsba.png';
import pe from '../../assets/pe.jpg';
import limited from '../../assets/limited.webp';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleAddToCart = () => {
    setToastMessage(`${product.name} has been added to your cart.`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handlePurchase = () => {
    setIsModalOpen(false);
    setToastMessage(`Your order for ${product.name} has been placed successfully.`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden w-64">
      
      <div className="relative h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition"
        >
          <Heart
            className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>
      </div>

      
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>

        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">₱{product.price}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleAddToCart}
              className="w-full px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Complete Purchase</h3>
            <div className="flex items-center gap-4 border-b pb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h4 className="font-medium">{product.name}</h4>
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="text-lg font-bold mt-1">₱{product.price}</p>
              </div>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
              <p className="text-yellow-700 text-sm">
                ⚠️ The order will be voided if not purchased within 24 hours.
              </p>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button
                onClick={handlePurchase}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

const Home = () => {
  const products = [
    { id: 1, name: 'ICT', description: 'Information Technology programs.', price: '299.99', image: ict },
    { id: 2, name: 'SHS', description: 'Senior High School students.', price: '199.99', image: shs },
    { id: 3, name: 'BSHM', description: 'Hospitality Management.', price: '79.99', image: bshm },
    { id: 4, name: 'BSTM', description: 'Tourism Management.', price: '149.99', image: bstm },
    { id: 5, name: 'BACOMM', description: 'Communication programs.', price: '299.99', image: bacomm },
    { id: 6, name: 'BSBA', description: 'Business Administration.', price: '299.99', image: bsba },
    { id: 7, name: 'P.E.', description: 'Physical Education.', price: '299.99', image: pe },
    { id: 8, name: 'Limited', description: 'Limited edition items.', price: '299.99', image: limited },
  ];

  return (
    <div className="min-h-screen bg-slate-300">
      <main className="p-6">
        <div className="flex flex-wrap justify-center gap-28">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
