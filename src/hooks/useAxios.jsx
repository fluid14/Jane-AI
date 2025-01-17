import React, { useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { PreloaderContext } from '../components/shared/Preloader/context/preloaderContext';

export const useAxios = () => {
  const { showPreloader, hidePreloader } = useContext(PreloaderContext);

  const apiService = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      'X-API-KEY': process.env.NEXT_PUBLIC_BE_API_KEY,
    },
  });
  apiService.interceptors.request.use((response) => {
    // showPreloader();
    return response;
  });

  apiService.interceptors.response.use(
    (response) => {
      // hidePreloader();
      toast.success(response.data.message);
      return response;
    },
    (error) => {
      console.error(error);
      toast.error(error.response?.data.message);
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
      console.error(error);
      toast.error(error.response.data.message);
    },
  );

  return { apiService, apiService2 };
};
