import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import invoiceService from './invoiceService';

export const GetAllInvoice = createAsyncThunk("invoice/get-invoices", async (id, thunkAPI) => {
    try {
        const wishlist = await invoiceService.getAllInvoice(id);
        return wishlist;
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
});

const initialState = {
    invoices: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}
export const invoiceSlice = createSlice({
    name: "invoice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetAllInvoice.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(GetAllInvoice.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.invoices = action.payload;
            })
            .addCase(GetAllInvoice.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })

    }
});

export default invoiceSlice.reducer;