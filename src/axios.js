import axios from "axios";

const instance = axios.create({
    baseURL: "https://tinder-backend-lmartinez.herokuapp.com"
})

export default instance;