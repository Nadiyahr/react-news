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
