import { createContext, useState } from "react";
import { food_list } from "../assets/assets.jsx";
import { useEffect } from "react";

export const StoreContext = createContext(null)

const ContextStoreProvider = (props ) => {
    //  console.log("Provider rendered");

    const [cartItems, setCartItems] = useState({}) // an empty list

    const addItemToCart = (itemId) =>{
        console.log(itemId)
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({...prev,[itemId]:1}))
        }
        else(
            setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
        )
    }

    // 0r thos other way to add an item if not existing or increment the value of the item of it is existing
    //  const addItemToCart = (itemId) =>{
    //     if (!cartItems[itemId]) {
    //         setCartItems((prev) => ({...prev,[itemId]: (prev[itemId] || 0)+1}))
    //     }

    const removeItemFromCart = (itemId) => {
        if (cartItems[itemId]) {
            setCartItems((prev) => ({...prev, [itemId] :prev[itemId]-1}))
        }
    }

    const getTotalCartAmount= () => {
        let totalAmount = 0;
        for (const item in cartItems)
        {
            if (cartItems[item] > 0){
             let itemInfo = food_list.find((product) => product._id === item);
            totalAmount += itemInfo.price* cartItems[items]
            }
            
        }
    }

    // useEffect(() => {
    //     console.log(cartItems)
    // }, [cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addItemToCart,       
        removeItemFromCart,
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default ContextStoreProvider;


//FoodItem.jsx
//