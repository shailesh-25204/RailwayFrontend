import axios from '../http-common';

class TrainDataService {
    get(url, params) {
        return axios.get(url, params)
    }

    post(url, params) {
        return axios.post(url, params)
    }
    
    // postTrainDetails() {
    //     return axios.post('/api/src')
    // }

    // getTrainDetails() {
    //     return axios.get('/api/src')
    // }

}

export default new TrainDataService();