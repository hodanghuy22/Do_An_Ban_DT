import axios from "axios"
import { base_url,config } from "../../utils/axiosConfig";

const getInvoices = async()=>{
    console.log("Asdacasa");
    console.log(config);
    const response = await axios.get(`${base_url}Invoices`,config);
    if(response.data){
        return response.data;
    }
}

const invoiceService = {
    getInvoices
};

export default invoiceService;