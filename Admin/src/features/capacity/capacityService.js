import axios from "axios"
import { base_url,config } from "../../utils/axiosConfig";

const getCapacitiesShow = async()=>{
    const response = await axios.get(`${base_url}Capacities/GetCapacitiesShow`);
    if(response.data){
        return response.data;
    }
}


const capacityService = {
    getCapacitiesShow,
    
};

export default capacityService;