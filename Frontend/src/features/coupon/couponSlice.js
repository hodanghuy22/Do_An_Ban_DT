import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import couponService from './couponService';
import { toast } from 'react-toastify';

export const CheckCoupon = createAsyncThunk("coupon/check-coupon", async (data, thunkAPI) => {
    try {
        const coupon = await couponService.checkCoupon(data);
        return coupon;
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
});

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
    extraReducers: (builder) => {
        builder
            .addCase(CheckCoupon.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(CheckCoupon.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.ACoupon = action.payload;
                if(state.ACoupon != null){
                    toast.success("Add Coupon is successfully!!!")
                }else{
                    toast.error("Can't Add Coupon!!!")
                }
            })
            .addCase(CheckCoupon.rejected, (state, action) => {
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

export default couponSlice.reducer;