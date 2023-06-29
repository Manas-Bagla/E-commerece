import './App.css';
import Navbar from './components/navbar/navbar.js';
import Slider from './components/carousal/slider.js';
import Products from './components/products/products.js';
import { BrowserRouter as Router ,Routes,Route} from "react-router-dom" 
import Product from "./components/product/product.js"
function App() {
  return (
    <div className="App">
     <Navbar/>
   
    <Routes>
    <Route exact path="/" Component={Slider}/>
    <Route exact path="/products" Component={Products}/>
    <Route exact path="/products/:id" Component={Product} />

     
     </Routes>
     
    </div>
  );
}

export default App;
