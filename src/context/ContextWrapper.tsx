import { useEffect, useReducer, useState } from 'react';
import {
  IArticlesDataGit,
  Icons,
  IDataGit,
  IIcinData,
  IStatisticsData,
  IStatistics
} from '../react-app-env';
import { getAllArticlesForGit } from '../services/articlesGit';
import { useMediaQuery } from 'react-responsive';
import { Action, GlobalContext, IndexState } from './GlobalContext';
import { KHARKIV, KYIV, ODESSA, TOP } from '../services/varsApi';
import {
  getLatestStatistics,
  getStatisticsIcons
} from '../services/statisticsWar';
import json from '../assest/json/newsGitExample.json';

interface Props {
  children: JSX.Element;
}

const indexReducer = (state: IndexState, action: Action) => {
  switch (action.type) {
    case 'PREV':
      return {
        ...state,
        index: state.index - action.payload
      };

    case 'NEXT':
      return {
        ...state,
        index: state.index + action.payload
      };

    case 'SET':
      return {
        ...state,
        index: action.payload
      };
  }
};

type R = ReturnType<typeof indexReducer>;

export const ContextWrapper: React.FC<Props> = ({ children }) => {
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [warIcons, setWarIcons] = useState<Icons | null>(null);
  const [warStatistics, setWarStatistics] = useState<IStatistics | null>(null);
  const [topNewsData, setTopNewsData] = useState<IArticlesDataGit[]>([]);
  const [kyivNews, setKyivNews] = useState<IArticlesDataGit[]>([]);
  const [odessaNews, setOdessaNews] = useState<IArticlesDataGit[]>([]);
  const [kharkivNews, setKharkivNews] = useState<IArticlesDataGit[]>([]);
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  const [index, dispatchIndex] = useReducer<React.Reducer<R, Action>>(
    indexReducer,
    { index: 0 }
  );

  useEffect(() => {
    const getData = async () => {
      await getAllArticlesForGit(TOP)
        .then((response: IDataGit) => {
          setTopNewsData(response.results);
          setKyivNews(response.results);
          setOdessaNews(response.results);
          setKharkivNews(response.results);
        })
        .catch(console.error);
      await getAllArticlesForGit(KYIV)
        .then((response: IDataGit) => {
          setKyivNews(response.results);
        })
        .catch(console.error);
      await getAllArticlesForGit(ODESSA)
        .then((response: IDataGit) => {
          setOdessaNews(response.results);
        })
        .catch(console.error);
      await getAllArticlesForGit(KHARKIV)
        .then((response: IDataGit) => {
          setKharkivNews(response.results);
        })
        .catch(console.error);

      setLoading(false);
    };

    getData();
  }, []);

  useEffect(() => {
    const getWarStatistics = async () => {
      await getStatisticsIcons()
        .then((response: IIcinData) => {
          setWarIcons(response.data);
        })
        .catch((res) => console.log(res));
      await getLatestStatistics()
        .then((response: IStatisticsData) => {
          setWarStatistics(response.data);
        })
        .catch((res) => console.log(res));
    };

    getWarStatistics();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        topNewsData,
        setTopNewsData,
        totalResults,
        setTotalResults,
        loading,
        setLoading,
        index,
        dispatchIndex,
        isDesktopOrLaptop,
        isTablet,
        isMobile,
        isNotMobile,
        kyivNews,
        odessaNews,
        kharkivNews,
        warIcons,
        setWarIcons,
        warStatistics,
        setWarStatistics
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
