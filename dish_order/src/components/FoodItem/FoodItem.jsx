import React, { useState, useContext } from 'react';
import "./FoodItem.css" 
import { StoreContext } from '../../contexts/storeContext';

const FoodItem = ({id, name, price, description, image}) => {

    //   const [countItems, setCountItems] = useState(0)
    const {cartItems, setCartItems, addItemToCart, removeItemFromCart} = useContext(StoreContext )
    console.log("image: ", image)
  return (
    <div className="food-item">
        <div className="food-item-image-container">
            <img src={image} alt={name} className="food-item-image" />

             {!cartItems[id]
            ?<img className="add"  src="https://i.pinimg.com/736x/ac/98/55/ac98554a4cd24ac2a97a76e07bb2bc26.jpg" 
            onClick={()=> addItemToCart(id)} alt="add_item" />
            :<div className="food-item-counter">
                <img src="https://i.pinimg.com/736x/6c/fc/8e/6cfc8e3efed25701778c800ba18ac2a9.jpg" 
                 onClick={()=>removeItemFromCart(id)}alt="remove-items" className="remove"/>
                <p>{cartItems[id]}</p>
                <img src="https://i.pinimg.com/736x/8b/d9/36/8bd9362f205617b27929026ff14bf0cb.jpg" 
                onClick={()=> addItemToCart(id)} className='' alt="add_item"/>
            </div>
        }

        </div>
       
        <div className="food-item-info">
            <div className="food-item-rating">
                <p>{name}</p>
                <img src="https://i.pinimg.com/736x/6f/47/21/6f47218844a9629139968573c49af871.jpg" alt="star" className="star" />
            </div>
            <p className="food-item-description">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem;

