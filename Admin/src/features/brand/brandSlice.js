import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import brandService from "./brandService";


export const GetBrands = createAsyncThunk("brand/get-brands", async(thunkAPI) =>{
    try{
        return await brandService.getBrands();
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})


const initialState = {
    brands: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const brandSlice = createSlice({
    name: "brand",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(GetBrands.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(GetBrands.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.brands = action.payload;
        })
        .addCase(GetBrands.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
    }
})

export default brandSlice.reducer;