import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import authServer from "./authServer";


export const login = createAsyncThunk("auth/login", async(userData,thunkAPI) =>{
    try{
        return await authServer.login(userData);
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})

export const GetAllUsers = createAsyncThunk("auth/get-allUsers", async(userData,thunkAPI) =>{
    try{
        return await authServer.getAllUsers();
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
        builder.addCase(login.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.user = action.payload;
            if(state.isSuccess === true){
                toast.info("User Created Successfully");
            }
        })
        .addCase(login.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isError === true){
                toast.error(action.payload.response.data.message);
            }
        }).addCase(GetAllUsers.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(GetAllUsers.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.users = action.payload;
        })
        .addCase(GetAllUsers.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
    }
})

export default authSlice.reducer;