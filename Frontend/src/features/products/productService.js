import axios from 'axios'

const getPhone = async () => {
    const response = await axios.get('https://localhost:7056/api/Products')
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
const getProductBrand = async (id) => {
    const response = await axios.get(`https://localhost:7056/api/ProductTypeDetails/GetProductsByProductType/${id}`)

    if (response.data) {
        return response.data;
    }
}
const productService = {
    getPhone,
    getAPhone,
    getBrand,
    getProductBrand
}

export default productService
