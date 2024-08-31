const Card = (props:any) => {
    console.log(props)
  return (
    <div>
      <div className="p-4 max-w-sm mx-auto bg-white rounded-xl  hover:shadow-md overflow-hidden cursor-pointer">
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src="https://via.placeholder.com/400"
            alt="Product Image"
          />
          <div className="absolute top-2 right-2 bg-gray-900 text-white text-sm px-2 py-1 rounded">
            New
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Product Title
          </h2>
          <p className="text-gray-600 mb-4">
            Short description of the product goes here. It's concise and
            engaging.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">$99.99</span>
            <button className="px-4 py-2 bg-blue-600  text-white text-sm font-semibold rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

