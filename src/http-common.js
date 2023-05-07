import axios from 'axios';

axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDU3MjFmYTZiMzk0M2FmNDhiOGM1NWQiLCJnaXZlbk5hbWUiOiJTYWxtYW4iLCJlbWFpbCI6IlNhbG1hbkBraGFuLmNvbSIsImlhdCI6MTY4MzQzMzU3OCwiZXhwIjoxNjgzNDM3MTc4fQ.FO_QcjYZ092R8XEdeNibaCK-pYVmEyH279_2WOVc8ug"


export default axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        // "Content-type": "application/json"
    }
});