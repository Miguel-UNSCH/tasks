import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tasks-prueba-api.onrender.com/api',
    withCredentials: true,
})

export default instance

