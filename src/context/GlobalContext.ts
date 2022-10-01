import React from 'react';
import { IArticlesDataGit, Icons, IStatistics } from '../react-app-env';

export type ActionType = 'PREV' | 'NEXT' | 'SET';

export type Action = {
  type: ActionType;
  payload: number;
};

export type IndexState = {
  index: number;
};

export interface INewsContext {
  topNewsData: IArticlesDataGit[] | [];
  setTopNewsData: (data: IArticlesDataGit[]) => void;
  totalResults: number;
  setTotalResults: (totRes: number) => void;
  loading: boolean;
  setLoading: (val: boolean) => void;
  index: IndexState;
  dispatchIndex: React.Dispatch<Action>;
  isDesktopOrLaptop: boolean;
  isTablet: boolean;
  isMobile: boolean;
  isNotMobile: boolean;
  kyivNews: IArticlesDataGit[] | [];
  odessaNews: IArticlesDataGit[] | [];
  kharkivNews: IArticlesDataGit[] | [];
  warIcons: Icons | null;
  setWarIcons: (data: Icons) => void;
  warStatistics: IStatistics | null;
  setWarStatistics: (data: IStatistics) => void;
}

export const defaultState = {
  topNewsData: [],
  setTopNewsData: () => {},
  totalResults: 0,
  setTotalResults: () => {},
  loading: false,
  setLoading: () => {},
  index: { index: 0 },
  dispatchIndex: () => {},
  isDesktopOrLaptop: false,
  isTablet: false,
  isMobile: false,
  isNotMobile: true,
  kyivNews: [],
  odessaNews: [],
  kharkivNews: [],
  warIcons: null,
  setWarIcons: () => {},
  warStatistics: null,
  setWarStatistics: () => {}
};

export const GlobalContext = React.createContext<INewsContext>(defaultState);
