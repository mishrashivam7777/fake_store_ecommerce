import { Routes, Route } from 'react-router-dom';
import './index.css';
import ShopView from '../views/ShopView';
import Navbar from '../chunks/Navbar';
import Footer from '../chunks/Footer';
import MainView from '../views/MainView';

function Router() {
  return (
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path='/shop' element={<ShopView />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default Router;