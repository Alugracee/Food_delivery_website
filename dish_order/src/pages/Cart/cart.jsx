import React, { useContext } from 'react';
import "./cart.css"; 
import { StoreContext } from '../../contexts/storeContext.jsx';

const Cart = () => {
    const {cartItems, food_list, removeItemFromCart} = useContext(StoreContext )
  // console.log(food_list)
  // console.log("cart sees: ", cartItems)
  //   food_list.forEach((item) => {
  // console.log({itemId: item._id,nitemIdType: typeof item._id, cartKeys: Object.keys(cartItems), cartValue: cartItems[item._id]});
  //   });

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
{/*         
         {food_list.forEach((item) => {
          console.log("Check this: ", item._id, "type:", typeof item._id, "cartKeys: ", Object.keys(cartItems), "cart value:", cartItems[item._id] );})} */}
          
        {food_list.map((item, index) =>{
          // console.log("cart sees: ", cartItems)
          if(cartItems[item._id] > 0){
            return(
              <div key={item._id} className="cart-items-title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price*cartItems[item._id]}</p>
                <p onClick={() =>removeItemFromCart(item._id)} className='cross'>X</p>
              </div>
            )
          }
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-details">
            <p>Subtotal</p>
            <p>{0}</p>
          </div>
          <hr />

          <div className="cart-details">
            <p>Delivery</p>
            <p>{2}</p>
          </div>
          <hr />
          <div className="cart-details">
            <p>Total</p>
            <b>{0}</b>
          </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        
         <div className="cart-promo-code">
          <div>
            <p>Enter your promocode here</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder='promo'/>
              <button >Submit</button>
            </div>
          </div>
        </div>
      </div>

     
      
    </div>
  )
}

export default Cart;
