import './index.css';
import Navbar from './chunks/Navbar';
import Footer from './chunks/Footer';
import Router from './routes/Router';

function App() {
  return (
      <div className="">
        <Navbar />
        <Router />
        <Footer />
      </div>
  );
}

export default App;