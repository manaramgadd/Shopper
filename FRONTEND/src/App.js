import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Hero from './Components/Hero/Hero'


function App() {
  return (
    <div >
     
     <BrowserRouter>
     <Navbar/>
     <Hero/>
     <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/mens" element={<ShopCategory category='mens'/>}/>
      <Route path="/women" element={<ShopCategory  category='women'/>}/>
      <Route path="/kids" element={<ShopCategory  category='kids'/>}/>
      <Route path="/product" element={<Product/>}>
      <Route path=":productId" element={<Product/>}/> 
      </Route>
      <Route path="/cart" element={<Cart/>} />
      <Route path="/login" element={<LoginSignup/>} />
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
