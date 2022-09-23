import React from 'react';
import { IArticlesData, IArticlesDataGit } from '../react-app-env';

export type ActionType = 'PREV' | 'NEXT' | 'SET';

export type Action = {
  type: ActionType;
  payload: number;
};

export type IndexState = {
  index: number;
};

export interface INewsContext {
  topNewsData: IArticlesData[] | [];
  setTopNewsData: (data: IArticlesData[]) => void;
  // topNewsData: IArticlesDataGit[] | [];
  // setTopNewsData: (data: IArticlesDataGit[]) => void;
  totalResults: number;
  setTotalResults: (totRes: number) => void;
  loading: boolean;
  setLoading: (val: boolean) => void;
  index: IndexState;
  dispatchIndex: React.Dispatch<Action>;
}

export const defaultState = {
  topNewsData: [],
  setTopNewsData: () => {},
  totalResults: 0,
  setTotalResults: () => {},
  loading: false,
  setLoading: () => {},
  index: { index: 0 },
  dispatchIndex: () => {}
};

export const GlobalContext = React.createContext<INewsContext>(defaultState);
