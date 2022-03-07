import * as React from "react";
import CartWidget from "../Navbar/CartWidget";
import './style.scss';

const ItemCount = ({contador, reset, counter}) =>{
    
   return (
        <div className='moverContainer counter-container'>
            <button onClick={contador}>+</button>
            <p>{counter}</p>
            <button onClick={reset}>-</button>
            <CartWidget cant={counter}/>
        </div>
   );
};

export default ItemCount;