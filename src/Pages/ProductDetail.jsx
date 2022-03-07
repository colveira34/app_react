import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../Components/ItemDetail";


export const ProductDetail = () =>{

    const {productId} = useParams();
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
    
      const URL = `http://localhost:3001/Productos/${productId}`;
      fetch(URL)
        .then(res=>res.json())
        
        .then((data)=>setProduct((data)));
    
    },[productId]);
      
    
    if(isLoading || !product) return <p>Cargando...</p>;
    return <ItemDetail product = {product}/>;
 
};