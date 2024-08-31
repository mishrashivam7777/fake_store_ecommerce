const CustomerReviews = () => {
    return (
      <div className="bg-[#ffffff] p-8 text-center shadow-lg">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#333333] mb-6">
            What Our Customers Are Saying
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full sm:w-1/3 bg-[#f0f0f0] p-6 rounded-lg shadow-md">
              <p className="text-md text-[#666666] mb-4">
                "Fantastic quality and exceptional service! I couldn't be happier with my purchase."
              </p>
              <p className="font-semibold text-[#333333]">- Alex R.</p>
            </div>
            
            <div className="w-full sm:w-1/3 bg-[#f0f0f0] p-6 rounded-lg shadow-md">
              <p className="text-md text-[#666666] mb-4">
                "A seamless shopping experience with fast delivery. Highly recommend!"
              </p>
              <p className="font-semibold text-[#333333]">- Jamie L.</p>
            </div>
            
            <div className="w-full sm:w-1/3 bg-[#f0f0f0] p-6 rounded-lg shadow-md">
              <p className="text-md text-[#666666] mb-4">
                "Excellent products at great prices. I'll definitely be coming back for more."
              </p>
              <p className="font-semibold text-[#333333]">- Taylor M.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CustomerReviews;
  