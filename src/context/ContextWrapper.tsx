import { log } from 'console';
import { useEffect, useReducer, useState } from 'react';
import { useAsyncValue } from 'react-router-dom';
import { IArticlesData, IArticlesDataGit, IData } from '../react-app-env';
import { getAllArticles } from '../services/articles';
import { getAllArticlesForGit } from '../services/articlesGit';
import { useMediaQuery } from 'react-responsive';
import {
  Action,
  ActionType,
  GlobalContext,
  INewsContext,
  IndexState
} from './GlobalContext';

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
  const [index, dispatchIndex] = useReducer<React.Reducer<R, Action>>(
    indexReducer,
    { index: 0 }
  );
  const [topNewsData, setTopNewsData] = useState<IArticlesData[]>([]);
  // const [topNewsData, setTopNewsData] = useState<IArticlesDataGit[]>([]);
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  // const Desktop = ({ children }) => {
  //   const isDesktop = useMediaQuery({ minWidth: 992 })
  //   return isDesktop ? children : null
  // }
  // const Tablet = ({ children }) => {
  //   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  //   return isTablet ? children : null
  // }
  // const Mobile = ({ children }) => {
  //   const isMobile = useMediaQuery({ maxWidth: 767 })
  //   return isMobile ? children : null
  // }
  // const Default = ({ children }) => {
  //   const isNotMobile = useMediaQuery({ minWidth: 768 })
  //   return isNotMobile ? children : null
  // }

  useEffect(() => {
    // const getData = async () => {
    //   await getAllArticlesForGit()
    //     .then((response) => {
    //       setTopNewsData(response.results);
    //       setLoading(false);
    //     })
    //     .catch(console.error);
    // };

    // getData();

    const getData = async () => {
      await getAllArticles()
        .then((response) => {
          setTopNewsData(response.articles);
          setLoading(false);
          setTotalResults(9);
        })
        .catch(console.error);
    };

    getData();
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
        isNotMobile
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// export default ContextWrapper;
