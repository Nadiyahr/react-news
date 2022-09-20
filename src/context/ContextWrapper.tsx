import { log } from 'console';
import { useEffect, useReducer, useState } from 'react';
import { useAsyncValue } from 'react-router-dom';
import { IArticlesData, IData } from '../react-app-env';
import { getAllArticles } from '../services/articles';
import { ActionType, GlobalContext, INewsContext } from './GlobalContext';

interface Props {
  children: JSX.Element;
}

const indexReducer = (state: number, type: ActionType) => {
  switch (type) {
    case 'PREV':
      return state - 1;

    case 'NEXT':
      return state + 1;
  }
};

export const ContextWrapper: React.FC<Props> = ({ children }) => {
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [index, dispatchIndex] = useReducer(indexReducer, 0);
  const [topNewsData, setTopNewsData] = useState<IArticlesData[]>([]);

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
