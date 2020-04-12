import axios from 'axios';
const API_BASE_URL = 'http://localhost:3000/'

const getCourseLists = (callBackFunction) => {
    axios.get(`${API_BASE_URL}courses`)
    .then(res => {
        console.log(res.data);
        callBackFunction(res.data);
    })
    .catch(error=>console.error(error));
}


export  {getCourseLists};