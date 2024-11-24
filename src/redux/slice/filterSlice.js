import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    searchByName:"",
    searchByCategory:"",
}

const filterSlice = createSlice({
    name:"filters",
    initialState,

    reducers:{
        setSearchByName : (state,action)=>{
            state.searchByName = action?.payload;
        },
        setSearchByCategory : (state,action)=>{
            state.searchByCategory = action?.payload;
        },
        clearAllFilter : (state)=>{
            state.searchByName = "";
            state.searchByCategory = "";
        }
    }
})

export const {setSearchByName , setSearchByCategory , clearAllFilter} = filterSlice.actions;

export default filterSlice.reducer;