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

export const login = createAsyncThunk("auth/login", async(userData,thunkAPI) =>{
    try{
        return await userService.login(userData);
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})

export const UpdateAUser = createAsyncThunk("auth/update-user", async(userData,thunkAPI) =>{
    try{
        return await userService.updateUser(userData);
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})

export const ChangePassword = createAsyncThunk("auth/changePassword-user", async(userData,thunkAPI) =>{
    try{
        return await userService.changePassword(userData);
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})

export const ForgetPassword = createAsyncThunk("auth/forgetPassword-user", async(mail,thunkAPI) =>{
    try{
        return await userService.forgetPassword(mail);
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})

export const ResetPassword = createAsyncThunk("auth/resetPassword-user", async(data,thunkAPI) =>{
    try{
        return await userService.resetPassword(data);
    }catch(err){
        return thunkAPI.rejectWithValue(err);
    }
})

export const logoutUser = createAsyncThunk('auth/logout', async () => {
    localStorage.removeItem('customer');
    localStorage.removeItem('token');
});

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
        }).addCase(login.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.user = action.payload;
            if(state.isSuccess === true){
                localStorage.setItem('token', action.payload.userDto.token)
                toast.info("Login Successfully");
            }
        })
        .addCase(login.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isError === true){
                toast.error("Login Fail!!!");
            }
        }).addCase(UpdateAUser.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(UpdateAUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.user = action.payload;
            if(state.isSuccess === true){
                toast.success("Update Successfully");
            }
        })
        .addCase(UpdateAUser.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isError === true){
                toast.error(action.payload.response.data.message);
            }
        }).addCase(ChangePassword.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(ChangePassword.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            if(state.isSuccess === true){
                toast.success("ChangePassword Successfully");
            }
        })
        .addCase(ChangePassword.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            toast.error("ChangePassword Unsuccessfully");
        })
        .addCase(logoutUser.fulfilled, (state) => {
            state.user = null;
            state.wishlist = []; // Xóa danh sách mong muốn nếu cần
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            toast.success("Logged out successfully");
        })
        .addCase(ForgetPassword.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(ForgetPassword.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            if(state.isSuccess){
                toast.success("Gmail was sent!!!");
            }
        })
        .addCase(ForgetPassword.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isError){
                toast.error(action.error.message);
            }
        })
        .addCase(ResetPassword.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(ResetPassword.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            if(state.isSuccess){
                toast.success("Reset Password is successfully!!!");
            }
        })
        .addCase(ResetPassword.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isError){
                toast.error(action.error.message);
            }
        })
    }
})

export default authSlice.reducer;