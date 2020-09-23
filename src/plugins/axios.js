import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/",
  //   timeout: 1000,
  headers: {
    accept: "application/json"
  }
});

export default axiosInstance;
