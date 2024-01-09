import axios from 'axios'
import { base_url } from '../../utils/axiosConfigure';

const getRangtingsForProduct = async (id) => {
    const response = await axios.get(`${base_url}Ratings/GetRatings/${id}`)
    if (response.data) {
        return response.data;
    }
}


const ratingService = {
    getRangtingsForProduct,
}

export default ratingService
