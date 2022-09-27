import { useContext, useMemo, useState } from 'react';
import { IArticlesData, IArticlesDataGit } from '../../react-app-env';
import SlidingArticles from './slidingArticles';
import { GlobalContext } from '../../context/GlobalContext';
import BallLoader from '../loaders.tsx/ballLoader';
import SliderControlers from '../buttons/sliderControllers';

const Feed = () => {
  const { topNewsData, loading, index } = useContext(GlobalContext);

  const filterArticles = useMemo((): IArticlesDataGit[] => {
    const filtredAtcl = topNewsData.filter(
      (a) => a.category.includes('top') && a.image_url !== null
    );
    // (a.url.includes('/news/') ||
    //   a.url.includes('/exclusive/') ||
    //   a.url.includes('/rubric-ato/') ||
    //   a.url.includes('/news-isw-viyna-zvit/') ||
    //   a.url.includes('/posts/') ||
    //   a.url.includes('/war/') ||
    //   a.url.includes('/ato/') ||
    //   a.url.includes('/novyna/') ||
    //   a.url.includes('/ukrayina/')) &&
    // a.urlToImage !== null &&
    // !a.url.includes('sport')
    // );
    return filtredAtcl;
  }, [topNewsData]);

  return (
    <section className="h-[480px] w-screen md:h-screen overflow-x-hiden no-sctollbar select-none relative bg-top-color">
      {filterArticles.length && !loading ? (
        filterArticles.map((artcl, i) => (
          <div
            key={i}
            className={`absolute align-middle w-[600px] md:w-full h-full scroll-none transition duration-700 transform ${
              i === index.index
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-1/2'
            }`}
          >
            {i === index.index && (
              <img
                className="block w-full h-full mx-auto"
                src={artcl.image_url || require('../../assest/img/image.png')}
                loading="lazy"
                alt="..."
              />
            )}
            <h2 className="absolute bottom-1/3 left-4 lg:left-16 text-4xl leading-normal text-gray-100 lg:w-1/2 font-bold">
              {artcl.title}
            </h2>
            <SliderControlers length={filterArticles.length} />
          </div>
        ))
      ) : (
        <BallLoader color="white" />
      )}
      <SlidingArticles topArticles={filterArticles} />
    </section>
  );
};

export default Feed;
