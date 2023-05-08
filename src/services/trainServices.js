import axios from '../http-common';

class TrainDataService {
    get(url, params) {
        const token = localStorage.getItem("jwtAccessToken")
        console.log("FROM GET TRAINDATASERVICE")
        console.log(token)
        const config = {
            headers: { authorization: `Bearer ${token}` }
        };
        return axios.get(url, params, config)
    }
    
    post(url, params) {
        const token = localStorage.getItem("jwtAccessToken")
        console.log("FROM POST TRAINDATASERVICE")
        console.log(token)
        const config = {
            headers: { authorization: `Bearer ${token}` }
        };
        return axios.post(url, params,config)
    }
    
    
    // postTrainDetails() {
    //     return axios.post('/api/src')
    // }

    // getTrainDetails() {
    //     return axios.get('/api/src')
    // }

}

export default new TrainDataService();