import { Categories } from '../react-app-env';

export const BASE_URL = 'https://newsapi.org/v2/top-headlines?country=ua&';
export const BASE_URL_GIT =
  'https://newsdata.io/api/1/news?apiKey=pub_1160265a3e0a68dbf7191818a968ac140d706&country=ua&category=top';
export const KEY = 'apiKey=6dd832e2a7a34b229d09612605840b06';
export const KEY_GIT = 'pub_1160265a3e0a68dbf7191818a968ac140d706';
export const CATEGORIES: Categories = {
  business: 'category=business&',
  entertainment: 'category=entertainment&',
  health: 'category=health&',
  science: 'category=science&',
  sports: 'category=sports&',
  technology: 'category=technology&'
};
