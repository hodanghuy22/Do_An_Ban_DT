import axios from 'axios'
import { base_url, config } from '../../utils/axiosConfigure';

const getCart = async (id) => {
    const response = await axios.get(`${base_url}Carts/${id}`, config)
    if (response.data) {
        return response.data;
    }
}


const cartService = {
    getCart,
}

export default cartService
