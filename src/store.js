import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./redux/slice/wishlistSlice";
import cartSlice from "./redux/slice/cartSlice";




const store = configureStore({
    reducer:{
        wishlistReducer : wishlistSlice,
        cartReducer : cartSlice
    }
})

export default store