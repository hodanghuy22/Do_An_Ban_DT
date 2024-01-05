import axios from 'axios'
import { base_url, config } from '../../utils/axiosConfigure';

const getCart = async (id) => {
    const response = await axios.get(`${base_url}Carts/${id}`, config)
    if (response.data) {
        return response.data;
    }
}

const addCart = async (cartData) => {
    const response = await axios.post(`${base_url}Carts`, cartData, config)
    if (response.data) {
        return response.data;
    }
}

const deleteCart = async (id) => {
    const response = await axios.delete(`${base_url}Carts/${id}`, config)
    if (response.data) {
        return response.data;
    }
}

const cartService = {
    getCart,
    addCart,
    deleteCart,
}

export default cartService
