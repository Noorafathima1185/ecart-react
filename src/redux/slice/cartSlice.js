import { createSlice } from "@reduxjs/toolkit";



export const cartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addToCart : (state, action)=>{
            state.push(action, payload)
        },
        removeItemCart : (state, action)=>{
            state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToCart , removeItemCart} = cartSlice.actions

export default cartSlice.reducer