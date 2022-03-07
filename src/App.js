import logo from './logo.svg';
import './App.scss';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import { ProductDetail } from './Pages/ProductDetail';
import { CartProvider } from './Components/Context/CartContext';
function App() {
  
  return (
    <div className="App">
      <CartProvider>
          <BrowserRouter>
              <Navbar/>
              <Routes>
                <Route path="/">
                      <Route index element={<HomePage/>}/>
                      <Route path = "/about" element={<AboutPage/>}/>  
                      <Route path = "/products">
                         <Route index element ={<ProductDetailPage/>}/>
                         <Route path=':productId' element={<ProductDetail/>}/>
                      </Route> 
                </Route>    
             </Routes>
          </BrowserRouter>
      </CartProvider>       
    </div>
  );
}

export default App;
