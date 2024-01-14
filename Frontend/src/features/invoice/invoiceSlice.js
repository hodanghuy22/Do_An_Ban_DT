import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import invoiceService from './invoiceService';
import { toast } from 'react-toastify';

export const GetAllInvoice = createAsyncThunk("invoice/get-invoices", async (id, thunkAPI) => {
    try {
        const wishlist = await invoiceService.getAllInvoice(id);
        return wishlist;
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
});

export const CreateInvoice = createAsyncThunk("invoice/create-invoice", async (data, thunkAPI) => {
    try {
        const wishlist = await invoiceService.createInvoice(data);
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
            .addCase(CreateInvoice.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(CreateInvoice.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.invoice = action.payload;
                if(state.isSuccess){
                    toast.success("Create Invoice is successfully!")
                }
            })
            .addCase(CreateInvoice.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if(state.isError){
                    toast.error(action.error.message)
                }
            })
    }
});

export default invoiceSlice.reducer;