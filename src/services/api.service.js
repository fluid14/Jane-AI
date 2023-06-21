import axios from 'axios';
import { toast } from 'react-toastify';

const apiService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

apiService.interceptors.request.use((response) => {
  console.log('preloader');
  return response;
});

apiService.interceptors.response.use(
  (response) => {
    console.log('preloader off');
    return response;
  },
  (error) => {
    console.log(error);
    toast.error(error.response.data.message);
  },
);

/**
 * @deprecated use apiService instead.
 */

const apiService2 = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL2,
});

apiService2.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    toast.error(error.response.data.message);
  },
);

export { apiService, apiService2 };
