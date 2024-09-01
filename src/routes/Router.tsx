import { Routes, Route } from 'react-router-dom';
import ShopView from '../views/ShopView';
import MainView from '../views/MainView';
import CartView from '../components/Base/CartView';
import SingleProductPage from '../components/Base/SingleProduct';
function Router() {
  return (
      <div className="">
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path='/shop' element={<ShopView />} />
          <Route path='/cart' element={<CartView/>}/>
          <Route path='/single/:id' element={<SingleProductPage/>}/>
        </Routes>
      </div>
  );
}

export default Router;