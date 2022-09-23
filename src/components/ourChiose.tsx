import { useContext, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { IArticlesData } from '../react-app-env';

const OurChoices = () => {
  const { topNewsData } = useContext(GlobalContext);

  const trasformDate = (date: Date) => {
    return date.toLocaleString('uk-UK', {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    });
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
  }, [topNewsData]);
  return (
    <section className="lg:w-3/4 w-full h-fit border px-6 pb-6">
      <h3 className="text-3xl font-bold pb-6 text-neutral-700">
        Вибір редакції
      </h3>
      <div className="grid grid-cols-3 gap-4 place-content-stretch ">
        {ourChoices.map((n, i) => {
          console.log(topNewsData.map((x) => x.url));
          if (i < 6) {
            return (
              <div className="h-52 mb-10" key={i}>
                <div className="h-2/3">
                  <img
                    className="w-full h-full"
                    src={n.urlToImage || require('../assest/img/image.png')}
                    alt=""
                  />
                </div>
                <div className="max-h-16 flex-row gap-y-2.5">
                  <span>{trasformDate(n.publishedAt)}</span>
                  <h3 className="text-base font-semibold leading-5">
                    {n.title}
                  </h3>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default OurChoices;
