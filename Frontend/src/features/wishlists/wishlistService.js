import axios from "axios"
import { base_url, config } from "../../utils/axiosConfigure";

const getWishlist = async (id) => {
    const response = await axios.get(`https://localhost:7056/api/Wishlists/${id}`);
    if (response.data) {
        return response.data;
    }
}
const createWishList = async (wishlistData) => {
    const response = await axios.post(`${base_url}Wishlists`,wishlistData,config);
    if (response.data) {
        return response.data;
    }
}

const wishlistService = {
    getWishlist,
    createWishList
}


export default wishlistService;