import axios from 'axios';
import { IDataGit } from '../react-app-env';
import { BASE_URL_GIT } from './varsApi';

export async function getAllArticlesForGit(category: string) {
  const { data }: any = await axios.get<IDataGit>(`${BASE_URL_GIT}${category}`);
  return data;
}

export async function getAllArticlesByRegion() {
  const { data }: any = await axios.get<IDataGit>(`${BASE_URL_GIT}`);
  return data;
}
