import { createContext } from "react";
import { food_list } from "../assets/assets.jsx";

export const StoreContext = createContext(null)

const ContextStoreProvider = (props ) => {

    const contextValue = {
        food_list,
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default ContextStoreProvider;