import axios from "axios";

const apicep = axios.create({
    baseURL: 'http://viacep.com.br/ws/'
});

export default apicep;