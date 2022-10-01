import axios from 'axios';
import { IIcinData, IStatisticsData } from '../react-app-env';
import { ICONS, STATISTICS, STATISTICS_URL } from './varsApi';

export async function getStatisticsIcons() {
  const { data }: any = await axios.get<IIcinData>(`${STATISTICS_URL}${ICONS}`);
  return data;
}

export async function getLatestStatistics() {
  const { data }: any = await axios.get<IStatisticsData>(
    `${STATISTICS_URL}${STATISTICS}`
  );
  return data;
}
