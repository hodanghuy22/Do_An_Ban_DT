import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import colorService from "./colorService";


export const GetColors = createAsyncThunk("color/get-colors", async(thunkAPI) =>{
    try{
        return await colorService.getColors();
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})


const initialState = {
    colors: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const colorSlice = createSlice({
    name: "color",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(GetColors.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(GetColors.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.colors = action.payload;
        })
        .addCase(GetColors.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
    }
})

export default colorSlice.reducer;