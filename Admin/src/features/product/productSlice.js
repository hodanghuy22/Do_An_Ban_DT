import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import productService from './productService';
import { toast } from 'react-toastify';

export const getAllProducts = createAsyncThunk("product/get-products", async (thunkAPI) => {
    try {
        return await productService.getProducts();
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
})

export const getAProduct = createAsyncThunk("product/get-product", async (id, thunkAPI) => {
    try {
        return await productService.getAProduct(id);
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

export const CreateProduct = createAsyncThunk("product/create-product", async (productData, thunkAPI) => {
    try {
        return await productService.createProduct(productData);
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
})

export const DeleteProduct = createAsyncThunk("product/delete-product", async (id, thunkAPI) => {
    try {
        return await productService.deleteProduct(id);
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
})

export const resetState = createAction('Reset_all')

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
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.isLoading = true;
        }).addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.products = action.payload;
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
        }).addCase(CreateProduct.pending, (state) => {
            state.isLoading = true;
        }).addCase(CreateProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.newProduct = action.payload;
            if(state.isSuccess){
                toast.success("Create Product is successfully!!!");
            }
        }).addCase(CreateProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isError){
                toast.error(action.error.message);
            }
        }).addCase(DeleteProduct.pending, (state) => {
            state.isLoading = true;
        }).addCase(DeleteProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.deleteProduct = action.payload;
            if(state.isSuccess){
                toast.success("Delete Product is successfully!!!");
            }
        }).addCase(DeleteProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isError){
                toast.error(action.error.message);
            }
        }).addCase(resetState, () => initialState);

    }
})

export default productSlice.reducer;