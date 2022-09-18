import axios from 'axios';
import { axiosInstance } from '../http-common';
import { IData } from '../react-app-env';
import { CATEGORIES, KEY, BASE_URL } from './varsApi';

export async function getAllArticles() {
  const { data }: any = await axios.get<IData>(`${BASE_URL}${KEY}`);
  return data;
}

export async function getArticlesByCategory(category: string) {
  return axiosInstance.get<Array<IData>>(CATEGORIES[category]);
}
