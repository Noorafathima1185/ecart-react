import { createSlice } from "@reduxjs/toolkit"



export const cartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addToCart : (state, actions)=>{
            state.push(actions.payload)
        },
        removeItemCart : (state, actions)=>{
            return state.filter(item=>item.id!=actions.payload)
        }
    }
})

export const {addToCart , removeItemCart} = cartSlice.actions

export default cartSlice.reducer