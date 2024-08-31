const Banner = () => {
  return (
    <div className="bg-[#f8f8f8] p-8 text-center shadow-lg relative">
      <div className="container mx-auto">
        
        <h2 className="text-3xl font-bold text-[#333333] mb-2">
          Welcome to Our Exclusive Online Store!
        </h2>
        <p className="text-lg text-[#666666] mb-4">
          Discover the latest trends and enjoy special discounts on top products. Don't miss out on our limited-time offers!
        </p>      
        
        <div>
          <button className="px-6 py-3 bg-[#000000] text-white font-semibold rounded-lg shadow-md hover:bg-[#333333] transition duration-300">
            Shop Now
          </button>
          <button className="ml-4 px-6 py-3 bg-[#e0e0e0] text-[#000000] font-semibold rounded-lg shadow-md hover:bg-[#cccccc] transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
