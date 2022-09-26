import axios from 'axios';
import { axiosInstance } from '../http-common';
import { IData } from '../react-app-env';
import { CATEGORIES, BASE_URL, KEY } from './varsApi';

export async function getAllArticles() {
  const { data }: any = await axiosInstance.get<IData>(`${BASE_URL}${KEY}`);
  return data;
}
