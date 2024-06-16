// src/config.js
const config = {
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'https://mern-ecommerce-eight-kappa.vercel.app/'
  };
  
  export default config;
  
  // src/services/api.js
  import config from '../config';
  
  export const fetchData = async () => {
    const response = await fetch(`${config.API_BASE_URL}/api/data`);
    const data = await response.json();
    return data;
  };
  