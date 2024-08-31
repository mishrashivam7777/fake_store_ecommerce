import Card from "../Base/Card";
const FeaturedProducts = () => {
    return (
      <div className="bg-[#f8f8f8] p-8 text-center shadow-lg relative">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#333333] mb-6">
            Explore Our Featured Products
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6">        
            <Card />
          </div>
        </div>
      </div>
    );
  };
  
  export default FeaturedProducts;
  