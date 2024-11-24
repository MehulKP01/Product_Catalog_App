import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("fetchProduct" , async ()=>{
    const response = await axios.get('https://fakestoreapi.com/products') 
    return response.data
}) 

const productSlice = createSlice({
    name:"products",
    initialState:{
        isLoading:false,
        data:[],
        isError:false
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(fetchProduct.fulfilled, (state,action)=>{
            state.isLoading= false;
            state.data = action.payload;
        })
        .addCase(fetchProduct.rejected, (state)=>{
            state.isError = true;
        })
    }
})

export default productSlice.reducer;
