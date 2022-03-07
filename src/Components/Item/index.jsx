import { useNavigate } from 'react-router-dom';
import './Item.scss';

function Item({product}){ 
    const navigate = useNavigate();
    return(
        <div className='caja'>
            <img className="img" src={product.pictureURL}/>
           <p>ID del PROD: {product.id}</p>
           <p>Titulo PROD: {product.title}</p>
           <p>Precio del PROD: {product.price}</p>

           <button onClick={()=>navigate(`/products/${product.id}`)}>DETALLE DEL PRODUCTO</button>
        </div>
    );
};

export default Item;