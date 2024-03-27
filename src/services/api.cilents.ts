import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BaseURLs } from './constants';

const axiosConfig: AxiosRequestConfig = {
    baseURL: BaseURLs.baseurl, // Set the base URL for your requests
    headers: {
      'Content-Type': 'application/json', // Set the default content type
      //'Authorization': 'Bearer <your_access_token>' // Add any default headers you need
    }
  };
  
  // Create an Axios instance with your custom configuration
 export const baseClient: AxiosInstance = axios.create(axiosConfig);