import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ratingService from './ratingService';

export const GetRatingsForProduct = createAsyncThunk("rating/get-ratings", async (id, thunkAPI) => {
    try {
        const comment = await ratingService.getRangtingsForProduct(id);
        return comment;
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
});

const initialState = {
    ratings: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}
export const ratingSlice = createSlice({
    name: "rating",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetRatingsForProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(GetRatingsForProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.ratings = action.payload;
            })
            .addCase(GetRatingsForProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })

    }
});

export default ratingSlice.reducer