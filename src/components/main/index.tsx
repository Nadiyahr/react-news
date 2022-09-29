import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import ColumnArticles from './columnArticles';
import LeftSideNews from './rightSideNews';

const Main = () => {
  const { isDesktopOrLaptop, isMobile, isTablet } = useContext(GlobalContext);
  const [style, setStyle] = useState('');

  useEffect(() => {
    if (isMobile || isTablet) {
      setStyle('flex-row p-0 w-screen');
    }

    if (isDesktopOrLaptop) {
      setStyle('flex p-16 w-fill');
    }
  }, [isDesktopOrLaptop]);

  return (
    <main id="main" className={`bg-neutral-200 ${style}`}>
      <ColumnArticles />
      <LeftSideNews />
    </main>
  );
};

export default Main;
