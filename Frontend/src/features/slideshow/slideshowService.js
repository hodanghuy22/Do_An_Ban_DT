import axios from "axios"
import { base_url } from "../../utils/axiosConfigure";

const getSlideshows = async()=>{
    console.log("Ádcbcasca");
    const response = await axios.get(`${base_url}Slideshows`);
    console.log("Asdasda " + response.data);
    if(response.data){
        return response.data;
    }
}

const slideshowService = {
    getSlideshows,
};

export default slideshowService;