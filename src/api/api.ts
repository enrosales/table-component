import axios, { AxiosInstance, AxiosResponse } from 'axios';
//import { API_URL } from '../constants/api';
//import { Todo } from '../components/TodoItem/types';

/*const API_URL = 'http://localhost:3005'; */

const api: AxiosInstance = axios.create();

export const getRows = (url: string): Promise<AxiosResponse<any[]>> =>
  api.get(url);
