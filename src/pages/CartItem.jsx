import plants from "../components/data/plants.js";
import store from "../components/store/store.js";
import { useSelector , useDispatch} from "react-redux";
import {addItem, removeItem, updateQuantity } from '../components/cartslice.jsx';
import { Link } from "react-router-dom";


function CartItem() {
  
   const cart = useSelector ((state)=>state.cart.cart)
    const dispatch = useDispatch();
    const dcart = cart.map(plant => ({...plant, qty: plant.qty || 1})); // Ensure qty is defined for all plants
   const totalItems = dcart.length;
  

    const totalPrice = dcart.reduce((total, plant) => total + (plant.cost * plant.qty), 0);

    

    
     
  return (
    <div className="page">
      

      
      <h2>Shopping Cart</h2>
      <p>Total Plants: {totalItems}</p>
      <p>Total Cost: ₹{totalPrice}</p>
   
    
     
      
       {
        
       
  cart.map(plants => {
    console.log(`incart status:${ plants.inCart }`);
    
    if(plants.inCart)
    {
  
    return (
      <div key={plants.id}>
        
        <img src={plants.image} alt={plants.name} style={{ width: '200px' }} />
        
        <h3>{plants.name}</h3>
        <span style={{ marginLeft: '10px' , display:'inline-flex', alignItems:'center' }}>
           <button onClick={() => dispatch(updateQuantity({ name: plants.name, type: "decrement" }))}>-</button>
        <p>Quantity: {plants.qty}</p>
        <button onClick={() => dispatch(updateQuantity({ name: plants.name, type: "increment" }))}>+</button>

        </span>
       
        
        <p>Price: ₹{plants.cost }</p>
         <button onClick={() => dispatch(removeItem({ name: plants.name }))}>Remove from Cart</button>
      </div>
    
    );
  }
  })

  
}

      

      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
      <button onClick={() => alert("coming soon!")}>Checkout</button>
    </div>
  );
}

export default CartItem;
