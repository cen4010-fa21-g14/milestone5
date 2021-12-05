import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://distantly-near.herokuapp.com/api/",
});