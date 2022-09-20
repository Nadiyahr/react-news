import React from 'react';
import { IArticlesData } from '../react-app-env';

export type ActionType = 'PREV' | 'NEXT';

export interface INewsContext {
  topNewsData: IArticlesData[] | [];
  setTopNewsData: (data: IArticlesData[]) => void;
  totalResults: number;
  setTotalResults: (totRes: number) => void;
  loading: boolean;
  setLoading: (val: boolean) => void;
  index: number;
  dispatchIndex: (payload: ActionType) => void;
}

export const defaultState = {
  topNewsData: [],
  setTopNewsData: () => {},
  totalResults: 0,
  setTotalResults: () => {},
  loading: false,
  setLoading: () => {},
  index: 0,
  dispatchIndex: () => {}
};

export const GlobalContext = React.createContext<INewsContext>(defaultState);
