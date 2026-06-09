import React from 'react';
import "./FoodItem.css" 

const FoodItem = ({id, name, price, description, image}) => {
    console.log("image: ", image)
  return (
    <div className="food-item">
        <div className="food-item-image-container">
            <img src={image} alt={name} className="food-item-image" />
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

