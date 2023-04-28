import axios from "axios";

const token = localStorage.getItem("@motors:token");

export const kenzieKarsRequests = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com",
  timeout: 5000,
});
