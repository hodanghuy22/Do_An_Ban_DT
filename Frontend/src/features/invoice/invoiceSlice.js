import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import invoiceService from './invoiceService';
import { toast } from 'react-toastify';

export const GetAllInvoice = createAsyncThunk("invoice/get-invoices", async (id, thunkAPI) => {
    try {
        const invoice = await invoiceService.getAllInvoice(id);
        return invoice;
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
});
export const GetAInvoice = createAsyncThunk("invoice/get-invoice", async (id, thunkAPI) => {
    try {
        const invoice = await invoiceService.getAInvoice(id);
        return invoice;
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
});

export const CreateInvoice = createAsyncThunk("invoice/create-invoice", async (id, thunkAPI) => {
    try {
        const invoice = await invoiceService.createInvoice(id);
        return invoice;
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
});
export const GetCancelInvoice = createAsyncThunk("invoice/cancel-invoice", async (id, thunkAPI) => {
    try {
        const invoice = await invoiceService.GetCancelInvoice(id);
        return invoice;
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
});

export const GetConfirmedOrders = createAsyncThunk("invoice/confirmed-invoice", async (id, thunkAPI) => {
    try {
        const invoice = await invoiceService.GetConfirmedOrders(id);
        return invoice;
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
});

export const GetDeliveredOrders = createAsyncThunk("invoice/deliveredOrders-invoice", async (id, thunkAPI) => {
    try {
        const invoice = await invoiceService.GetDeliveredOrders(id);
        return invoice;
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
});

export const GetDeliveringOrders = createAsyncThunk("invoice/deliveringOrder-invoice", async (id, thunkAPI) => {
    try {
        const invoice = await invoiceService.GetDeliveringOrders(id);
        return invoice;
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
});

export const GetPlacedOrders = createAsyncThunk("invoice/placedOrders-invoice", async (id, thunkAPI) => {
    try {
        const invoice = await invoiceService.GetPlacedOrders(id);
        return invoice;
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
                state.invoices = action.payload;
                if (state.isSuccess) {
                    toast.success("Create Invoice is successfully!")
                }
            })
            .addCase(CreateInvoice.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError) {
                    toast.error(action.error.message)
                }
            })
            .addCase(GetAInvoice.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(GetAInvoice.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.a_invoice = action.payload;
            })
            .addCase(GetAInvoice.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(GetCancelInvoice.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(GetCancelInvoice.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.cancel_invoices = action.payload;
            })
            .addCase(GetCancelInvoice.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(GetConfirmedOrders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(GetConfirmedOrders.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.comfirm_invoices = action.payload;
            })
            .addCase(GetConfirmedOrders.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(GetDeliveredOrders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(GetDeliveredOrders.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.delivered_invoices = action.payload;
            })
            .addCase(GetDeliveredOrders.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(GetDeliveringOrders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(GetDeliveringOrders.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.deliveringinvoices = action.payload;
            })
            .addCase(GetDeliveringOrders.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(GetPlacedOrders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(GetPlacedOrders.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.placed_invoices = action.payload;
            })
            .addCase(GetPlacedOrders.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })

    }
});

export default invoiceSlice.reducer;