import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/productSlice'
import wishlistSlice from './slices/wishlistSlice'


const CartStore = configureStore({
    reducer:{
        productReducer: productSlice,
        wishlistReducer: wishlistSlice
    }
})

export default CartStore