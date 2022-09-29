import { useContext, useMemo } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import { IArticlesDataGit } from '../../../react-app-env';
import DesctopOurChoice from './desctopOurChoice';
import MobileOurChoice from './mobileOurChoice';
import { trasformDate } from '../../../assest/utils/utils';

const OurChoices = () => {
  const { topNewsData, isDesktopOrLaptop, isMobile, isTablet } =
    useContext(GlobalContext);

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
