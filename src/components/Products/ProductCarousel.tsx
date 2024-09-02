import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, products }) => {
  const navigate = useNavigate();
  
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNavigation = (data: Product) => {
    navigate(`/single/${data.id}`, { state: { product: data } });
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="h-full w-full border border-gray-300 bg-gray-100 rounded-lg overflow-hidden">
      <h2 className="text-2xl font-bold text-center my-4 px-4">{title}</h2>
      
      <div className="flex overflow-x-auto space-x-4 p-4 items-stretch">
        {currentProducts.map((product) => (
          <motion.div
            key={product.id}
            onClick={() => handleNavigation(product)}
            className="flex-shrink-0 cursor-pointer w-full sm:w-[220px] bg-white shadow-md rounded-lg flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              loading='lazy'
              src={product.image}
              alt={product.title}
              className="w-full h-[200px] rounded-t-lg object-cover"
            />
            <div className="flex-1 p-4 flex flex-col justify-between">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-700">${product.price.toFixed(2)}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row justify-center my-4 px-4">
        <motion.button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-l disabled:opacity-50 mb-2 sm:mb-0 sm:mr-2"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Previous
        </motion.button>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <motion.button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber + 1)}
            className={`px-4 py-2 ${currentPage === pageNumber + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'} mx-1 rounded`}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {pageNumber + 1}
          </motion.button>
        ))}
        <motion.button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-r disabled:opacity-50 mt-2 sm:mt-0 sm:ml-2"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Next
        </motion.button>
      </div>
    </div>
  );
};

export default ProductCarousel;
