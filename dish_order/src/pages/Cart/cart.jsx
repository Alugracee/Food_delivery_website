import React, { useContext } from 'react';
import "./cart.css"; 
import {StoreContext} from "../../contexts/storeContext.jsx"

const Cart = () => {
  const {cartItems, food_list, removeItemFromCart} = useContext(StoreContext)
  console.log(food_list)
  console.log(cartItems)
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        
        {food_list.map((item, index) =>{
          // console.log(item._id)
          if(cartItems[item._id] > 0){
            return(
              <div className="cart-items-title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price*cartItems[item._id]}</p>
                <p>X</p>

              </div>
            )
          }
        })}
      </div>
      
    </div>
  )
}

export default Cart;
