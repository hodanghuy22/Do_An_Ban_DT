import axios from 'axios'
import { base_url, config } from '../../utils/axiosConfigure';

const getAllInvoice = async (id) => {
    const response = await axios.get(`${base_url}Invoices/${id}`, config)
    if (response.data) {
        return response.data;
    }
}

const createInvoice = async (invoiceData) => {
    const response = await axios.post(`${base_url}Invoices`,invoiceData, config)
    if (response.data) {
        return response.data;
    }
}

const invoiceService = {
    getAllInvoice,
    createInvoice,
}

export default invoiceService
