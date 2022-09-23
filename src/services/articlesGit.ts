import axios from 'axios';
import { axiosInstanceGit } from '../http-common';
import { IDataGit } from '../react-app-env';
import { BASE_URL_GIT } from './varsApi';

export async function getAllArticlesForGit() {
  const { data }: any = await axios.get<IDataGit>(`${BASE_URL_GIT}`);
  return data;
}
