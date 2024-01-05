import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import commentService from './commentService';

export const GetCommentByProId = createAsyncThunk(" comment/get-comment-by-proId", async (id, thunkAPI) => {
    try {
        const comment = await commentService.GetCommentByProId(id);
        return comment;
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
});

const initialState = {
    comments: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}
export const commentSlice = createSlice({
    name: "comment",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetCommentByProId.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(GetCommentByProId.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.comments = action.payload;
            })
            .addCase(GetCommentByProId.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })

    }
});

export default commentSlice.reducer;