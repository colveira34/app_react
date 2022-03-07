import { useState } from "react";
import { useEffect } from "react";
import getItem from "../Components/Promesa";
import Item from "../Components/Item";
import { ProductDetail } from "./ProductDetail";

const ProductDetailPage = ()=>{
    const [productos, setProductos] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    useEffect(()=>{
    const getRespuesta = async()=>{
     
      try{ 
         const result = await getItem();   
         setisLoading(true);
         setProductos(result);
       }catch(error){
         alert("Hubo un error", error);
       };    
    };
      getRespuesta();  
   }, []);
   
       getItem()
       .finally(()=>setisLoading(false));
    return(
        <div className="fondoSection">
            <h1 className="ajustarTitulo">LISTADO DE NOTEBOOKS A LA VENTA</h1>

            {isLoading ?(
            <p>Cargando....</p>
            ):(
            productos.map((products)=>{
            return <Item key={products.id} product={products} />
            }))}
        </div>
       );
    };

export default ProductDetailPage;
