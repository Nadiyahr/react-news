import { INewsContext } from './context/GlobalContext';
import { type } from 'os';
/// <reference types="react-scripts" />

interface IArticlesData {
  source: Source;
  author: string;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: Date;
  content: string | null;
}

type Source = {
  id: any;
  name: string;
};

type Categories = {
  [key: string]: string;
};

interface IData {
  status: string;
  totalResults: number;
  articles: IArticlesData[];
}

interface IArticlesDataGit {
  title: string;
  link: string;
  keywords: null | string[];
  creator: null | string[];
  video_url: null | string;
  description: null | string;
  content: null | string;
  pubDate: string;
  image_url: null | string;
  source_id: string;
  country: string[];
  category: string[];
  language: string;
}

interface IDataGit {
  status: string;
  totalResults: number;
  results: IArticlesDataGit[];
}

type LoadButton = {
  type: 'square' | 'circle';
  name: string;
};

type SizeColumn = {
  width: string;
  height: string;
};

interface IStatisticsData {
  message: string;
  data: Statistics;
}

interface IStatistics {
  date: string;
  day: number;
  resource: string;
  stats: Stats;
  increase: Stats;
}

type Stats = {
  personnel_units: number;
  tanks: number;
  armoured_fighting_vehicles: number;
  artillery_systems: number;
  mlrs: number;
  aa_warfare_systems: number;
  planes: number;
  helicopters: number;
  vehicles_fuel_tanks: number;
  warships_cutters: number;
  cruise_missiles: number;
  uav_systems: number;
  special_military_equip: number;
  atgm_srbm_systems: number;
};

interface IIcinData {
  message: string;
  data: Icons;
}

type Icons = {
  personnel_units: IconData;
  tanks: IconData;
  armoured_fighting_vehicles: IconData;
  artillery_systems: IconData;
  mlrs: IconData;
  aa_warfare_systems: IconData;
  planes: IconData;
  helicopters: IconData;
  vehicles_fuel_tanks: IconData;
  warships_cutters: IconData;
  uav_systems: IconData;
  atgm_srbm_systems: IconData;
  cruise_missiles: IconData;
  special_military_equip: IconData;
};

type IconData = {
  title: string;
  icon: string;
  stats?: number;
};
