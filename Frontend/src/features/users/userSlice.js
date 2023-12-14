import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from './userService';
import { toast } from 'react-toastify';

export const registerUser = createAsyncThunk("auth/register", async(userData,thunkAPI) =>{
    try{
        return await userService.register(userData);
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})

const getCustomerfromLocalStorage = localStorage.getItem('customer')? JSON.parse(localStorage.getItem("customer")):null;

const initialState = {
    user: getCustomerfromLocalStorage,
    wishlist: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const authSlice = createSlice({
    name:"auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(registerUser.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(registerUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.createdUser = action.payload;
            if(state.isSuccess === true){
                toast.info("User Created Successfully");
            }
        })
        .addCase(registerUser.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isError === true){
                toast.error(action.payload.response.data.message);
            }
        })
    }
})

export default authSlice.reducer;