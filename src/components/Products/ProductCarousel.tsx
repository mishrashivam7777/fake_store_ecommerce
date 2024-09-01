import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <h2 className="text-2xl font-bold text-center my-4">{title}</h2>
      <div className="flex overflow-x-auto space-x-4 p-4 items-stretch">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => handleNavigation(product)}
            className="flex-shrink-0 cursor-pointer w-[220px] bg-white shadow-md rounded-lg flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[200px] rounded-t-lg"
            />
            <div className="flex-1 p-4 flex flex-col justify-between">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-700">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination Controls */}
      <div className="flex justify-center my-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-l"
        >
          Previous
        </button>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber + 1)}
            className={`px-4 py-2 ${currentPage === pageNumber + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'} mx-1 rounded`}
          >
            {pageNumber + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
