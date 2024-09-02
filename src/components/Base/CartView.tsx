
import { removeItem, updateItemQuantity} from '../../redux/cart'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';



const CartView = () => {
  const {cartItems} = useSelector((state: RootState)=> state.cartItems)
  
  const dispatch = useDispatch()

  const handleRemove = (id:any) => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (id:any, quantity:any) => {
    dispatch(updateItemQuantity({id, quantity }))
  };


  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item:any) => (
                <div key={item.id} className="flex items-center mb-4 border-b pb-4">
                  <img
                    loading='lazy'
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg mr-4"
                  />
                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-lg text-gray-700">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="bg-gray-300 px-2 py-1 rounded-l-lg"
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="bg-gray-300 px-2 py-1 rounded-r-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="ml-4 text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="mt-6 text-right">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 shadow hover:bg-blue-600"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartView;
