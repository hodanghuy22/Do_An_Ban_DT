import axios from "axios"
import { base_url,config } from "../../utils/axiosConfig";

const getCoupons = async()=>{
    const response = await axios.get(`${base_url}Coupons`);
    if(response.data){
        return response.data;
    }
}

const couponService = {
    getCoupons
};

export default couponService;