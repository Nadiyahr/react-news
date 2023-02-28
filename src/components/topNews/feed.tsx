import { useContext, useMemo } from 'react';
import { IArticlesDataGit } from '../../react-app-env';
import SlidingArticles from './slidingArticles';
import { GlobalContext } from '../../context/GlobalContext';
import BallLoader from '../loaders.tsx/ballLoader';
import SliderControlers from '../buttons/sliderControllers';
import Image from '../image';

const Feed = () => {
  const { topNewsData, loading, index } = useContext(GlobalContext);

  const filterArticles = useMemo((): IArticlesDataGit[] => {
    const filtredAtcl = topNewsData.filter((a) => a.category.includes('top'));
    return filtredAtcl;
  }, [topNewsData]);

  return (
    <section className="h-[480px] w-screen md:h-screen overflow-x-hiden no-sctollbar select-none relative bg-top">
      {filterArticles.length && !loading ? (
        filterArticles.map((artcl, i) => (
          <div
            key={i}
            className={`absolute align-middle h-full scroll-none transition duration-1000 transform w-[600px] md:w-full ${
              i === index.index ? 'opacity-100' : 'opacity-50'
            }`}
          >
            {i === index.index && <Image imgUrl={artcl.image_url} />}
          </div>
        ))
      ) : (
        <BallLoader color="white" />
      )}
      {filterArticles.length && !loading && (
        <div className=" absolute w-1/2 bottom-1/2 md:bottom-1/3 left-2 md:left-16">
          <h2 className="left-6 lg:left-16 text-4xl leading-normal text-gray-100 w-1/2 md:w-fit font-bold">
            {filterArticles.find((_, i) => i === index.index)?.title}
          </h2>
          <SliderControlers length={filterArticles.length} />
        </div>
      )}
      <SlidingArticles topArticles={filterArticles} />
    </section>
  );
};

export default Feed;
