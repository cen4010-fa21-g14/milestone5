import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://distantly-demo.herokuapp.com/api/",
});