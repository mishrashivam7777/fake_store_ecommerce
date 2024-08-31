import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import MainView from './views/MainView';
import ShopView from './views/ShopView';
import Navbar from './chunks/Navbar';
import Footer from './chunks/Footer';
function App() {
  return (
    <Router>
      <div className="">
      <Navbar/>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path='/shop' element={<ShopView/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
