import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./redux/slice/wishlistSlice";




const store = configureStore({
    reducer:{
        wishlistReducer:wishlistSlice
    }
})

export default store