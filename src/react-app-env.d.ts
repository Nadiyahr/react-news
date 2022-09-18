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
