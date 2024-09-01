import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addItem } from "../../redux/cart";

const SingleProductPage = () => {
  const location = useLocation();
  const dispatch = useDispatch()
  const product = location.state?.product;  
  console.log(product);

  if (!product) {
    return <div>No product found</div>;
  }

  const handleAddToCart = (product:any) => {
    dispatch(addItem(product))
  };

  return (
    <div className="bg-gray-100 p-8">
      <div className="mx-auto flex items-center justify-center gap-[30px]">
        <img
          src={product?.image}
          alt={product?.title}
          className="w-[400px] h-[400px] rounded-lg shadow-lg p-2"
        />
        <div className="max-w-[600px]">
          <h1 className="text-3xl font-bold mb-4">{product?.title}</h1>
          <p className="text-lg text-gray-700 mb-4">{product?.description}</p>
          <p className="text-xl font-semibold text-gray-900 mb-4">
            ${product?.price}
          </p>
          <button
            onClick={() => handleAddToCart(product)} 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
