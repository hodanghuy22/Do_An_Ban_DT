import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import capacityService from "./capacityService";


export const GetCapacitiesShow = createAsyncThunk("capacity/get-capacitiesShow", async(thunkAPI) =>{
    try{
        return await capacityService.getCapacitiesShow();
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})


export const resetState = createAction('Reset_all')

const initialState = {
    capacities: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const capacitySlice = createSlice({
    name: "capacity",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(GetCapacitiesShow.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(GetCapacitiesShow.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.capacitiesShow = action.payload;
        })
        .addCase(GetCapacitiesShow.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(resetState, () => initialState);
    }
})

export default capacitySlice.reducer;