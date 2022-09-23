import { log } from 'console';
import { useEffect, useReducer, useState } from 'react';
import { useAsyncValue } from 'react-router-dom';
import { IArticlesData, IArticlesDataGit, IData } from '../react-app-env';
import { getAllArticles } from '../services/articles';
import { getAllArticlesForGit } from '../services/articlesGit';
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
        dispatchIndex
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// export default ContextWrapper;
