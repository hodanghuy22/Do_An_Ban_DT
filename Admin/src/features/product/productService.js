import axios from 'axios'
import { base_url, config } from '../../utils/axiosConfig';

const getProducts = async () => {
    const response = await axios.get(`${base_url}Products`)
    if (response.data) {
        return response.data;
    }
}

const getAProduct = async (id) => {
    const response = await axios.get(`${base_url}/Products/${id}`)
    if (response.data) {
        return response.data;
    }
}

const getAPhone = async (id) => {
    const response = await axios.get(`https://localhost:7056/api/Products/${id}`)

    if (response.data) {
        return response.data;
    }
}
const getBrand = async (id) => {
    const response = await axios.get(`https://localhost:7056/api/Brands`)

    if (response.data) {
        return response.data;
    }
}

const createProduct = async(productData)=>{
    const response = await axios.post(`${base_url}Products`, productData, config);
    if(response.data){
        return response.data;
    }
}

const productService = {
    getProducts,
    getAPhone,
    getBrand,
    createProduct,
    getAProduct,
}

export default productService
