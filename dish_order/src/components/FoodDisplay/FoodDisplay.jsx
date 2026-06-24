import React, {useContext } from 'react';
import "./FoodDisplay.css";
import { StoreContext } from "../../contexts/storeContext.jsx";
import FoodItem from '../FoodItem/FoodItem.jsx';

const FoodDisplay = ({category}) => {
  const {food_list} =  useContext(StoreContext)
//   console.log(food_list)

  return (
    <div className="display-food" id="display-food">
        <h2>Top Dishes near you </h2>
        <div className="display-food-list">
            {
                food_list.map((item, index) => {
                    if(category==='All' || category===item.category){
                        return <FoodItem key={index} _id={item._id} name={item.name} 
                        price={item.price} description={item.description} image={item.image} />
                    } 
                })
            }
        </div>
    </div>
  )
}

export default FoodDisplay;

// (category)  means we can access all the children in the items directly with 

// {food_list
//           .filter(item => category === "All" || category === item.category)
//           .map(item => (
//             <FoodItem
//               key={item._id}
//               id={item._id}
//               name={item.name}
//               price={item.price}
//               description={item.description}
//               image={item.image}
//             />
//           ))}
