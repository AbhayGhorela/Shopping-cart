import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import productReducer from "../features/productSlice"
import darkModeReducer from "../features/darkModeSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products:productReducer,
        darkMode:darkModeReducer
    }
})


// Save to localStorage on any cart state change


store.subscribe(() =>{
    try{
        const cartState = store.getState().cart;
        const serializedState = JSON.stringify(cartState);
        localStorage.setItem('cartState',serializedState);
    }catch(e){
        console.warn('failed to save cart to localStorage',e);
    }
})


store.subscribe(()=>{
    try{
        const themeState = store.getState().darkMode;
        const serializedState = JSON.stringify(themeState);
        localStorage.setItem('themeState',serializedState);
    }catch(e){
        console.warn('failed to save theme to localStorage',e);
    }
})