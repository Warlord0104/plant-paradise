import React, { useState, useEffect, use } from 'react';
import './porducts.css';
import {useDispatch,useSelector } from 'react-redux';
import plants from '../components/data/plants.js';
import {addtocart} from '../components/cartslice.jsx';
import Header from '../components/Header.jsx'
   


function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
    
    const inCart = useSelector((state) => state.cart.cart.inCart);
    
    const plantsArray =plants 

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
    }
     const styleObjA = {
        backgroundColor: '#858585',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
        disabled: 'true',
    }
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    }
    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    }

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };

    const incart = (plant) => {
        const cart = useSelector((state) => state.cart.cart);
        const plantInCart = cart.find(item => item.name === plant.name);
        return plantInCart ? plantInCart.inCart : false;
    }
   
    

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };
     const dispatch = useDispatch();
    const handleAddToCart = (plant,e) => {
        // Logic to add the selected plant to the cart
        console.log(`Added ${plant.name} to cart`);
        console.log(plant);
       
        
        
        // setIncart(true);
        dispatch(addtocart(plant));
        
    };
    return (
        <div>
        
              
            {!showCart ? (
                <div className="product-grid">
                  {plantsArray.map((category, index) => ( // Loop through each category in plantsArray
  <div key={index}> {/* Unique key for each category div */}
    <h1>
      <div>{category.category}</div> {/* Display the category name */}
    </h1>
    <div className="product-list"> {/* Container for the list of plant cards */}
      {category.plants.map((plant, plantIndex) => ( // Loop through each plant in the current category
        <div className="product-card" key={plantIndex}> {/* Unique key for each plant card */}
          <img 
            className="product-image" 
            src={plant.image} // Display the plant image
            alt={plant.name} // Alt text for accessibility
          />
          <div className="product-title">{plant.name}</div> {/* Display plant name */}
          {/* Display other plant details like description and cost */}
          <div className="product-description">{plant.description}</div> {/* Display plant description */}
          <div className="product-cost">${plant.cost}</div> {/* Display plant cost */}
          <button
            className="product-button" 
             {...(incart(plant) ? { disabled: true, style: { color: 'gray' , backgroundColor: 'lightgray'} } : {})}
            onClick={() => handleAddToCart(plant,EventTarget) }  // Handle adding plant to cart 
          >
            { incart(plant)?"Added to Cart":"add to Cart"}
          </button>
        </div>
      ))}
    </div>
  </div>
))}
</div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
