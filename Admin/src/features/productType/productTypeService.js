import axios from "axios"
import { base_url,config } from "../../utils/axiosConfig";

const getProductTypes = async()=>{
    const response = await axios.get(`${base_url}ProductTypes`);
    if(response.data){
        return response.data;
    }
}

const productTypeService = {
    getProductTypes
};

export default productTypeService;