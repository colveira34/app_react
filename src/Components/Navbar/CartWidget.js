import '../Navbar/Navbar.css';

const CartWidget = ({cant}) =>{
   console.log("LLEGO ACA FIN::", cant);
   
    const logo = require('./iconoCarrito.png');
    
    return(
         <div className='cantItems'>
             <img src={logo}/>
         </div>
    );
};

export default CartWidget;