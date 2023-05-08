import axios from 'axios';

axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDU4MGEzZWQ4NmU1OTdjNmZlYjg3MzIiLCJnaXZlbk5hbWUiOiJzaGFpbGVzaCIsImVtYWlsIjoic0BkLmMiLCJpYXQiOjE2ODM0OTQwNDEsImV4cCI6MTY4MzU1ODg0MX0._aKPypD9zg2m_Wbv1az7sp7KAakXuR_rKYOeCt5GoNcxh"


export function setAuthToken(token){
    if (token) {
        console.log("HIHHI")
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        axios.defaults.headers.common['Authorization'] = null;
    }
}

export default axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        // "Content-type": "application/json"
    }
});