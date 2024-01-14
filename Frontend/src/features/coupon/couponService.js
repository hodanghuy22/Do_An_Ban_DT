import axios from 'axios'
import { base_url, config } from '../../utils/axiosConfigure';

const checkCoupon = async (checkData) => {
    const response = await axios.post(`${base_url}Coupons/CheckCoupon`, checkData, config)
    if (response.data) {
        return response.data;
    }
}


const couponService = {
    checkCoupon,
}

export default couponService
