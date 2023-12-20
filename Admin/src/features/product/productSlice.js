import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import productService from "./productService";


export const GetProducts = createAsyncThunk("product/get-products", async(thunkAPI) =>{
    try{
        return await productService.getProducts();
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})


const initialState = {
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(GetProducts.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(GetProducts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.products = action.payload;
        })
        .addCase(GetProducts.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
    }
})

export default productSlice.reducer;