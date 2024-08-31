import { Routes, Route } from 'react-router-dom';
import ShopView from '../views/ShopView';
import Navbar from '../components/Base/Navbar';
import Footer from '../components/Base/Footer';
import MainView from '../views/MainView';

function Router() {
  return (
      <div className="">
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path='/shop' element={<ShopView />} />
        </Routes>
      </div>
  );
}

export default Router;