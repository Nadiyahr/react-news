import { useContext, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { IArticlesData } from '../react-app-env';
import DesctopOurChoice from './desctopOurChoice';
import MobileOurChoice from './mobileOurChoice';

const OurChoices = () => {
  const { topNewsData, isDesktopOrLaptop, isMobile, isTablet } =
    useContext(GlobalContext);

  console.log('isMobile', isMobile);
  console.log('isTablet', isTablet);
  console.log('isDesktopOrLaptop', isDesktopOrLaptop);

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

  const ourChoices = useMemo((): IArticlesData[] => {
    return topNewsData.filter(
      (a) =>
        (a.url.includes('/news/') ||
          a.url.includes('/exclusive/') ||
          a.url.includes('/rubric-ato/') ||
          a.url.includes('/news-isw-viyna-zvit/') ||
          a.url.includes('/posts/') ||
          a.url.includes('/war/') ||
          a.url.includes('/ato/') ||
          a.url.includes('/novyna/') ||
          a.url.includes('/ukrayina/')) &&
        !a.url.includes('sport')
    );
  }, [topNewsData]);
  return (
    <section>
      <h3 className="text-3xl font-bold pt-4 lg:pt-0 pb-6 text-blue-main">
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
