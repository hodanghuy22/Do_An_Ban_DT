import axios from "axios"
import { base_url,config } from "../../utils/axiosConfigure";

const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

const register = async(userData)=>{
    const response = await axios.post(`${base_url}Users/register`, userData);
    if(response.data){
        localStorage.setItem("customer", JSON.stringify(response.data));
        return response.data;
    }
}

const login = async(userData)=>{
    const response = await axios.post(`${base_url}Users/login`, userData);
    if(response.data){
        localStorage.setItem("customer", JSON.stringify(response.data));
        return response.data;
    }
}

const updateUser = async(userData) => {
    console.log(config);
    console.log(userData);
    const response = await axios.put(`${base_url}Users/${userData.id}`, userData.data, config);
    if(response.data){
        localStorage.setItem("customer", JSON.stringify(response.data));
        return response.data;
    }
}

const changePassword = async(userData) => {
    console.log(config);
    console.log("Asdas",userData);
    const response = await axios.put(`${base_url}Users/ChangePassword/${userData.id}`, userData.changePasswordModel, config);
    if(response.data){
        return response.data;
    }
}

const userService = {
    register,
    login,
    updateUser,
    changePassword
};

export default userService;