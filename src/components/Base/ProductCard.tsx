import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }:any) => {
  const navigate = useNavigate()
  
  const handleNavigation = (data: any) => {
    navigate(`/single/${data.id}`, { state: { product: data } });
  };

  return (
    <div onClick={() => handleNavigation(product)} className="border cursor-pointer rounded-lg overflow-hidden shadow-lg p-4 bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 "
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
