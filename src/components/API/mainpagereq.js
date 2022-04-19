import axios from "axios";

/*export async function getRecommend(userId= 1, limit = 10) {
    try {
        const response = await axios.post('http://45.90.35.82:3333/api/realEstates/recommended', { userId, limit })
        return response.data.body;
    } catch(err) {
        console.log(err)
    }
}*/

export async function getPopular(page = 1, limit = 6) {
    try {
        const response2 = await axios.post('http://45.90.35.82:3333/api/realEstates/popular', { page, limit })
        return response2.data.body;
    } catch(err) {
        console.log(err)
    }
}