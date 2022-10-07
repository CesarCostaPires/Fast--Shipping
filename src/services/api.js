import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.18.12/api-fast-shipping/'
});

export default api;