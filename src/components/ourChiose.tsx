import { useContext, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { IArticlesData, IArticlesDataGit } from '../react-app-env';
import Regions from './regions';

const OurChoices = () => {
  const { topNewsData, loading } = useContext(GlobalContext);

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

  //  || '/war/' || '/ato/' || '/ukrayina/' || '/novyna/'

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

    // a.category.includes('top'));
  }, [topNewsData]);
  return (
    <section className="lg:w-3/4 w-full h-fit border px-6 pb-6 blue-main">
      <h3 className="text-3xl font-bold pb-6 text-blue-main">Вибір редакції</h3>
      <div className="grid grid-cols-3 gap-4 place-content-stretch ">
        {ourChoices.map((n, i) => {
          if (i < 6) {
            return (
              <div className="h-60 mb-10" key={i}>
                <div className="h-2/3">
                  <img
                    className="w-full h-full"
                    src={n.urlToImage || require('../assest/img/image.png')}
                    alt=""
                  />
                </div>
                <div className="max-h-16 flex-row pt-4">
                  <span className="text-xs mb-3">
                    {trasformDate(n.publishedAt)}
                  </span>
                  <h3 className=" mt-3">{n.title}</h3>
                </div>
              </div>
            );
          }
        })}
      </div>
      <Regions />
    </section>
  );
};

export default OurChoices;
