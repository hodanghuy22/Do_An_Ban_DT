import axios from "axios"
import { base_url,config } from "../../utils/axiosConfig";

const login = async(userData)=>{
    const response = await axios.post(`${base_url}Users/login`, userData);
    if(response.data){
        localStorage.setItem("customer", JSON.stringify(response.data));
        return response.data;
    }
}

const getAllUsers = async()=>{
    const response = await axios.get(`${base_url}Users`, config);
    if(response.data){
        return response.data;
    }
}

const authServer = {
    login,
    getAllUsers,
};

export default authServer;