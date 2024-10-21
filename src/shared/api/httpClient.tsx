import axios, {AxiosInstance} from "axios";


export const HttpClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    validateStatus: () => true,
})