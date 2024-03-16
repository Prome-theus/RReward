"use client"
import { useState } from 'react';
import Marketplace from '@/src/components/MarketPlace';

const allProducts = [
  { id: 1, name: 'The Catalyzer', price: 16.00, image: 'https://dummyimage.com/420x260' },
  { id: 2, name: 'Shooting Stars', price: 21.15, image: 'https://dummyimage.com/421x261' },
  { id: 3, name: 'Neptune', price: 12.00, image: 'https://dummyimage.com/422x262' },
  { id: 1, name: 'The Catalyzer', price: 16.00, image: 'https://dummyimage.com/420x260' },
  { id: 2, name: 'Shooting Stars', price: 21.15, image: 'https://dummyimage.com/421x261' },
  { id: 3, name: 'Neptune', price: 12.00, image: 'https://dummyimage.com/422x262' },
  { id: 1, name: 'The Catalyzer', price: 16.00, image: 'https://dummyimage.com/420x260' },
  { id: 2, name: 'Shooting Stars', price: 21.15, image: 'https://dummyimage.com/421x261' },
  { id: 3, name: 'Neptune', price: 12.00, image: 'https://dummyimage.com/422x262' },
  { id: 1, name: 'The Catalyzer', price: 16.00, image: 'https://dummyimage.com/420x260' },
  { id: 2, name: 'Shooting Stars', price: 21.15, image: 'https://dummyimage.com/421x261' },
  { id: 3, name: 'Neptune', price: 12.00, image: 'https://dummyimage.com/422x262' },
  { id: 1, name: 'The Catalyzer', price: 16.00, image: 'https://dummyimage.com/420x260' },
  { id: 2, name: 'Shooting Stars', price: 21.15, image: 'https://dummyimage.com/421x261' },
  { id: 3, name: 'Neptune', price: 12.00, image: 'https://dummyimage.com/422x262' },
  { id: 1, name: 'The Catalyzer', price: 16.00, image: 'https://dummyimage.com/420x260' },
  { id: 2, name: 'Shooting Stars', price: 21.15, image: 'https://dummyimage.com/421x261' },
  { id: 3, name: 'Neptune', price: 12.00, image: 'https://dummyimage.com/422x262' },
  { id: 1, name: 'The Catalyzer', price: 16.00, image: 'https://dummyimage.com/420x260' },
  { id: 2, name: 'Shooting Stars', price: 21.15, image: 'https://dummyimage.com/421x261' },
  { id: 3, name: 'Neptune', price: 12.00, image: 'https://dummyimage.com/422x262' },
];

const itemsPerPage = 12;

const HomePage = () => {
  const [products, setProducts] = useState(allProducts);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const isLastPage = indexOfLastItem >= products.length;

  const sortByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  return (
    <div>
      <div className="text-3xl font-bold text-center mt-5 mb-4">Marketplace</div>
      <div className="flex items-end justify-end">
      <button onClick={sortByPrice} className="p-2 border rounded-md mr-2">Sort</button>
      <button onClick={sortByPrice} className="p-2 border rounded-md mr-2">Filter</button>
      </div>
      <Marketplace products={currentProducts} />
      <div className="flex justify-center mt-4">
        <button onClick={prevPage} disabled={currentPage === 1} className="p-2 mr-2 bg-gray-300 text-gray-600 rounded-md">Prev</button>
        <button onClick={nextPage} disabled={isLastPage} className="p-2 bg-blue-500 text-white rounded-md">Next</button>
      </div>
    </div>
  );
};

export default HomePage;
