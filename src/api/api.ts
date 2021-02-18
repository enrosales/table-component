import axios, { AxiosInstance, AxiosResponse } from 'axios';

const api: AxiosInstance = axios.create();

export const getRows = (url: string): Promise<AxiosResponse> => api.get(url);
