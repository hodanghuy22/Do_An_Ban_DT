import axios from 'axios'
import { base_url, config } from '../../utils/axiosConfigure';

const getAllInvoice = async (id) => {
    const response = await axios.get(`${base_url}Invoices/${id}`, config)
    if (response.data) {
        return response.data;
    }
}
const getAInvoice = async (id) => {
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
const GetCancelInvoice = async (id) => {
    const response = await axios.get(`${base_url}Invoices/GetInvoicesByStatus/${id}/HUY`, config)
    if (response.data) {
        return response.data;
    }
}
const GetConfirmedOrders = async (id) => {
    const response = await axios.get(`${base_url}Invoices/GetInvoicesByStatus/${id}/DXN`, config)
    if (response.data) {
        return response.data;
    }
}
const GetDeliveredOrders = async (id) => {
    const response = await axios.get(`${base_url}Invoices/GetInvoicesByStatus/${id}/DGH`, config)
    if (response.data) {
        return response.data;
    }
}
const GetDeliveringOrders = async (id) => {
    const response = await axios.get(`${base_url}Invoices/GetInvoicesByStatus/${id}/GH`, config)
    if (response.data) {
        return response.data;
    }
}
const GetPlacedOrders = async (id) => {
    const response = await axios.get(`${base_url}Invoices/GetInvoicesByStatus/${id}/DH`, config)
    if (response.data) {
        return response.data;
    }
}


const invoiceService = {
    getAllInvoice,
    getAInvoice,
    createInvoice,
    GetCancelInvoice,
    GetConfirmedOrders,
    GetDeliveredOrders,
    GetDeliveringOrders,
    GetPlacedOrders
}

export default invoiceService
