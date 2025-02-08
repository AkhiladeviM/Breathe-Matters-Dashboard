import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Divider from './Components/Divider';
import { OurProducts } from './Components/OurProducts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <Navbar />
        <Home />
        <Divider class="heroDivider"/>
        <OurProducts/>
      </div>
    </div>
  );
}

export default App;
