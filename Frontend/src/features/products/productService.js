import axios from 'axios'

const getPhone = async () => {
    const response = await axios.get('https://localhost:7056/api/Phones')
    if (response.data) {
        return response.data;
    }
}

const getAPhone = async (id) => {
    const response = await axios.get(`https://localhost:7056/api/Phones/${id}`)

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
const GetProductsByProductType = async (id) => {
    const response = await axios.get(`https://localhost:7056/api/ProductTypeDetails/GetProductsByProductType/${id}`)

    if (response.data) {
        return response.data;
    }
}
const GetProductsByBrand = async (id) => {
    const response = await axios.get(`https://localhost:7056/api/Phones/GetPhoneByBrand/${id}`)

    if (response.data) {
        return response.data;
    }
}
const productService = {
    getPhone,
    getAPhone,
    getBrand,
    GetProductsByProductType,
    GetProductsByBrand
}

export default productService
