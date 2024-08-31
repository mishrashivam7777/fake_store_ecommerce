const FeaturedProducts = () => {
    return (
      <div className="bg-[#f8f8f8] p-8 text-center shadow-lg relative">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#333333] mb-6">
            Explore Our Featured Products
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full sm:w-80 bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://via.placeholder.com/300x200" 
                alt="Product 1" 
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#333333] mb-2">
                Premium Quality Gadget
              </h3>
              <p className="text-md text-[#666666] mb-4">
                Experience top-notch performance and sleek design. Perfect for tech enthusiasts.
              </p>
              <button className="px-4 py-2 bg-[#000000] text-white font-semibold rounded-lg shadow-md hover:bg-[#333333] transition duration-300">
                Buy Now
              </button>
            </div>
            
            <div className="w-full sm:w-80 bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://via.placeholder.com/300x200" 
                alt="Product 2" 
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#333333] mb-2">
                Stylish Wearable Tech
              </h3>
              <p className="text-md text-[#666666] mb-4">
                Combine fashion with functionality in our latest wearable technology.
              </p>
              <button className="px-4 py-2 bg-[#000000] text-white font-semibold rounded-lg shadow-md hover:bg-[#333333] transition duration-300">
                Buy Now
              </button>
            </div>
  
            <div className="w-full sm:w-80 bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://via.placeholder.com/300x200" 
                alt="Product 3" 
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#333333] mb-2">
                Innovative Smart Home Device
              </h3>
              <p className="text-md text-[#666666] mb-4">
                Transform your living space with our cutting-edge smart home solutions.
              </p>
              <button className="px-4 py-2 bg-[#000000] text-white font-semibold rounded-lg shadow-md hover:bg-[#333333] transition duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FeaturedProducts;
  