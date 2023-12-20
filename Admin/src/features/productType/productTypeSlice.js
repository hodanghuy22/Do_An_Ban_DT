import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import productTypeService from "./productTypeService";


export const GetProductTypes = createAsyncThunk("productType/get-productTypes", async(thunkAPI) =>{
    try{
        return await productTypeService.getProductTypes();
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})


const initialState = {
    productTypes: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const productTypeSlice = createSlice({
    name: "productType",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(GetProductTypes.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(GetProductTypes.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.productTypes = action.payload;
        })
        .addCase(GetProductTypes.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
    }
})

export default productTypeSlice.reducer;