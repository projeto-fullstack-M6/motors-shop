import axios from "axios";

const token = localStorage.getItem("@motors:token");

export const ApiRequests = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
