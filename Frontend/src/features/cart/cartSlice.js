import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cartService from './cartService';

export const GetCart = createAsyncThunk("cart/get-carts", async (id, thunkAPI) => {
    try {
        return await cartService.getCart(id);;
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
});

const initialState = {
    carts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}
export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(GetCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.carts = action.payload;
            })
            .addCase(GetCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })

    }
});

export default cartSlice.reducer;