import { createSlice } from "@reduxjs/toolkit";


const localCartfromLocalStorage = ()=>{
  try{
    const serializedState = localStorage.getItem('cartState');
    if(serializedState === null) return undefined;
    return JSON.parse(serializedState);
  }catch(e){
    console.warn('failed to load cart from loalStorage',e);
    return undefined;
  }
}

const initialState = localCartfromLocalStorage() || {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalPrice += item.price;
      } else {
        state.cartItems.push({ ...item, quantity: 1, total: item.price });
      }
      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.total;
        state.cartItems = state.cartItems.filter((i) => i.id !== id);
      }
    },
    increaseQty: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);
      if (item) {
        item.quantity += 1;
        item.total += item.price;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },
    decreaseQty: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.total -= item.price;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
      localStorage.removeItem('cartState')
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
