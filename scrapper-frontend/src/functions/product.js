
import axios from "axios";

export const getProducts = async () =>
    await axios.get(`http://localhost:8000/api/product`);