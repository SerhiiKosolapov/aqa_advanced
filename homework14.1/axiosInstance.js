import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`[${config.method.toUpperCase()}] ${config.url}`);
    console.log("Payload:", config.data || "—");
    return config;
  },
  (error) => {
    console.error("Запит не відправлено:", error.message);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(`[${response.status}] ${response.config.url}`);
    console.log("Response:", response.data);
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(`[${error.response.status}] ${error.config.url}`);
      console.error("Error data:", error.response.data);
    } else {
      console.error("Відповідь не отримана:", error.message);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
