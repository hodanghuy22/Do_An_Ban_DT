import axios from "axios"
import { base_url,config } from "../../utils/axiosConfig";

const getColors = async()=>{
    const response = await axios.get(`${base_url}Colors`);
    if(response.data){
        return response.data;
    }
}

const createColor = async(colorData)=>{
    console.log(colorData);
    console.log(config);
    const response = await axios.post(`${base_url}Colors`, colorData, config);
    if(response.data){
        return response.data;
    }
}

const colorService = {
    getColors,
    createColor
};

export default colorService;