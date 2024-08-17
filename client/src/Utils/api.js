import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products', error);
    throw error;
  }
};
export const addProduct = async (name,data) => {
     let payload = {
        name,
        data
     }
    try {
      const response = await axios.post(`${API_URL}/products/add`,payload);
      return response;
    } catch (error) {
      console.error('Error fetching products', error);
      return error;
    }
  };
  
