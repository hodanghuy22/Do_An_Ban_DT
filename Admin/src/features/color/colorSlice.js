import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import colorService from "./colorService";


export const GetColors = createAsyncThunk("color/get-colors", async(thunkAPI) =>{
    try{
        return await colorService.getColors();
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})

export const CreateColor = createAsyncThunk("color/create-color", async(colorData,thunkAPI) =>{
    try{
        return await colorService.createColor(colorData);
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})

export const resetState = createAction('Reset_all')

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
        }).addCase(CreateColor.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(CreateColor.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.newColor = action.payload;
            if(state.isSuccess) {
                toast.success("Create Color is successfully!!!");
            }
        })
        .addCase(CreateColor.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isError) {
                toast.error("Create Color was not successfully!!!");
            }
        }).addCase(resetState, () => initialState);
    }
})

export default colorSlice.reducer;