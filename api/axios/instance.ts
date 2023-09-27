import axios, { AxiosInstance } from "axios";

let apiInstance: AxiosInstance;

if (process.env.NODE_ENV === "development") {
  apiInstance = axios.create({
    baseURL: "http://localhost:3000/api",
  });
} else {
  apiInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });
}

export {apiInstance}
