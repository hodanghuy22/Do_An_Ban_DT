import axios from 'axios'
import { base_url, config } from '../../utils/axiosConfigure';

const getAllInvoice = async (id) => {
    const response = await axios.get(`${base_url}Invoices/${id}`, config)
    if (response.data) {
        return response.data;
    }
}


const invoiceService = {
    getAllInvoice,
}

export default invoiceService
