import axios from "axios"
import { base_url,config } from "../../utils/axiosConfig";

const getColors = async()=>{
    const response = await axios.get(`${base_url}Colors`);
    if(response.data){
        return response.data;
    }
}

const colorService = {
    getColors
};

export default colorService;