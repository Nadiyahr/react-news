import { useContext, useMemo } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import { IArticlesData, IArticlesDataGit } from '../../../react-app-env';
import DesctopOurChoice from './desctopOurChoice';
import MobileOurChoice from './mobileOurChoice';

const OurChoices = () => {
  const { topNewsData, isDesktopOrLaptop, isMobile, isTablet } =
    useContext(GlobalContext);

  const trasformDate = (d: Date) => {
    const date = new Date(d);

    return date
      .toLocaleString('uk-UK', {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      })
      .replace(/ о /, ':')
      .toUpperCase();
  };

  const ourChoices = useMemo((): IArticlesDataGit[] => {
    return topNewsData.filter((a) => a.category.includes('top'));
  }, [topNewsData]);
  return (
    <section className=" md:min-h-1/2">
      <h3 className="text-3xl font-bold pt-4 lg:pt-0 pb-6 text-blue-main pl-1">
        Вибір редакції
      </h3>
      {isMobile && (
        <MobileOurChoice data={ourChoices} trasformDate={trasformDate} />
      )}
      {(isDesktopOrLaptop || isTablet) && (
        <DesctopOurChoice data={ourChoices} trasformDate={trasformDate} />
      )}
    </section>
  );
};

export default OurChoices;
