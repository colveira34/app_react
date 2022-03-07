import { useState } from "react";
import ItemCount from "../ItemCount";
import '../Item/Item.scss';
import { useCart } from "../Context/CartContext";


const ItemDetail = ({product})=>{
   const [counter, setCounter] = useState(0);
   const {addItem,cart} = useCart();
   

   const handleClick = () =>{
      addItem(product.name, counter);
   };
 
   const limpiarCompra = ()=>{
       cart[0] = "SIN ITEMS"
       addItem(cart[0], 0);
   }

   const contador = ()=>{
       setCounter(counter+1);
   };
   
   const reset = () =>{
       if (counter<=0){
           alert("Se permiten Cantidades mayores a 0");
       }else{
           setCounter(counter-1);
       };
   };
   return (
         <div>   
              <img className="img" src={product.Img}/>
              <h1>Nombre del producto: {product.name}</h1>
              <p>Id del producto: {product.id}</p>
              <p>Descripcion del producto: {product.Description}</p>
              <p>Precio del producto: {product.Price}</p>
              <ItemCount contador = {contador}
               reset={reset}
               counter={counter}/>
             <button onClick={handleClick}>Agregar al Carrito</button>
             <button className="moverBotones" onClick={limpiarCompra}>Eliminar Compra</button>
             <div id="elemento"></div>
         </div>
    );
};

export default ItemDetail;