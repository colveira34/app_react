import ItemListContainer from "../ItemListContainer";
import CartWidget from "./CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () =>{
    //const logo = require('./iconoCarrito.png');
    return <nav id='menuNav'>
                <ul id='centrarMenu'>
                   <CartWidget/>
                   <li><Link to='/'>HOME</Link></li>
                   <li><Link to='/about'>ABOUT</Link></li>
                   
                   <li><Link to='/products'>PRODUCTS</Link></li>    
                </ul>
           </nav>
};
  
<ItemListContainer/>
export default Navbar;