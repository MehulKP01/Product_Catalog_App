import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slice/productSlice';
import filterReducer from './slice/filterSlice';

export const store = configureStore({
    reducer:{
        products:productReducer,
        filters:filterReducer,
    }
})

