import axios, {AxiosInstance} from "axios";
const rickInstance: AxiosInstance = axios.create({
    baseURL:'https://rickandmortyapi.com/api/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default rickInstance;