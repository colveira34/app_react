import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import ReactDOM from 'react-dom';

export const CartContext = createContext([]);

export const CartProvider = ({children})=>{
   const [cart, setCart] = useState([]);
   const [cartQuantity, setCartQuantity] = useState(0);

  
   
   const addItem = (item, quantity)=>{
       const element=(
           <div>
               <h5>Producto: {item}</h5>
               <h5>Cantidad: {quantity}</h5>
           </div>
        );
        ReactDOM.render(element, document.getElementById('elemento'));
   };
    return (
       <div>
            <CartContext.Provider
              value={{cart, addItem}}
              >
               {children}
            </CartContext.Provider>    
       </div>
    );
};

export const useCart = ()=>useContext(CartContext);