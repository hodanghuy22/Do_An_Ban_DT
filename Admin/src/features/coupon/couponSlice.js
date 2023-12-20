import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import couponService from "./couponService";


export const GetCoupons = createAsyncThunk("coupon/get-coupons", async(thunkAPI) =>{
    try{
        return await couponService.getCoupons();
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})


const initialState = {
    coupons: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const couponSlice = createSlice({
    name: "coupon",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(GetCoupons.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(GetCoupons.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.coupons = action.payload;
        })
        .addCase(GetCoupons.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
    }
})

export default couponSlice.reducer;