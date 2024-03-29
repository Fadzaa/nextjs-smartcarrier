import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api-dinacom.rplrus.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;