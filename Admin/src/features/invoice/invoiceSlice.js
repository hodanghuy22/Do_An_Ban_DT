import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import invoiceService from "./invoiceService";


export const GetInvoices = createAsyncThunk("invoice/get-invoices", async(thunkAPI) =>{
    try{
        return await invoiceService.getInvoices();
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})


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
    extraReducers: (builder)=>{
        builder.addCase(GetInvoices.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(GetInvoices.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.invoices = action.payload;
        })
        .addCase(GetInvoices.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
    }
})

export default invoiceSlice.reducer;