
import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.nasa.gov/EPIC/api',
});

export default api;