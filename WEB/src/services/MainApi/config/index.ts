import axios from 'axios';

const baseAPi = axios.create({
    baseURL: 'http://localhost:4000',
});

export default baseAPi;