import axios from "axios"
import { base_url,config } from "../../utils/axiosConfig";

const getProducts = async()=>{
    const response = await axios.get(`${base_url}Products`);
    if(response.data){
        return response.data;
    }
}

const productService = {
    getProducts  
};

export default productService;