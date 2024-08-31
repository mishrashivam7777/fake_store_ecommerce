import './index.css';
import Navbar from './components/Base/Navbar';
import Footer from './components/Base/Footer';
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