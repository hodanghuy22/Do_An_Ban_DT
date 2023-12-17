import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productService from './productService';

export const getAllProducts = createAsyncThunk("product/get-products", async (thunkAPI) => {
    try {
        return await productService.getPhone();
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
})

export const getAProduct = createAsyncThunk("product/get-product", async (id, thunkAPI) => {
    try {
        return await productService.getAPhone(id);
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
})
export const getBrand = createAsyncThunk("product/get-brands", async (thunkAPI) => {
    try {
        return await productService.getBrand();
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
})
const initalState = {
    phones: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}
export const productSlice = createSlice({
    name: "product",
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.isLoading = true;
        }).addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.phones = action.payload;
        }).addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
        }).addCase(getAProduct.pending, (state) => {
            state.isLoading = true;
        }).addCase(getAProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.product = action.payload;
        }).addCase(getAProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(getBrand.pending, (state) => {
            state.isLoading = true;
        }).addCase(getBrand.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.product = action.payload;
        }).addCase(getBrand.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        
    }
})
export default productSlice.reducer;