import axios from "axios"
import { base_url } from "../../utils/axiosConfigure";

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

const userService = {
    register,
    login
};

export default userService;