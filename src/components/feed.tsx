import { useEffect, useMemo, useState } from 'react';
import { IArticlesData } from '../react-app-env';
import { getAllArticles } from '../services/articles';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import SlidingArticles from './slidingArticles';

const Feed = () => {
  const [atricles, setArticles] = useState<IArticlesData[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadImg, setLoadImg] = useState(false);

  const filterArticles = useMemo((): IArticlesData[] => {
    const filtredAtcl = atricles.filter(
      (a) =>
        (a.url.includes('/news/') ||
          a.url.includes('/exclusive/') ||
          a.url.includes('/rubric-ato/') ||
          a.url.includes('/news-isw-viyna-zvit/') ||
          a.url.includes('/posts/')) &&
        a.urlToImage !== null &&
        !a.url.includes('sport') &&
        !a.url.includes('/ipress.ua/')
    );

    setTotalResults(filtredAtcl.length);

    return filtredAtcl;
  }, [atricles]);

  const handlePrev = () => {
    const lastEl = filterArticles.length - 1;
    return currentIndex === 0
      ? setCurrentIndex(lastEl)
      : setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    return currentIndex === filterArticles.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex((prev) => prev + 1);
  };

  console.log(filterArticles.filter((x) => x.url.includes('/ipress.ua/')));

  useEffect(() => {
    const getData = async () => {
      await getAllArticles().then((response) => {
        setArticles(response.articles);
        setLoading(false);
      });
    };

    getData();
  }, []);

  return (
    <div className="w-screen h-screen select-none relative bg-top-color">
      <div className="aspect-w-16 aspwct-h-9">
        {filterArticles.length && !loadImg ? (
          <div
            style={{
              backgroundImage: `url(${filterArticles[currentIndex].urlToImage})`
            }}
            className="relative w-screen h-screen bg-auto bg-no-repeat bg-center shadow-inset"
          >
            <h2 className="absolute bottom-1/3 left-16 text-4xl leading-normal text-gray-100 w-1/2 font-bold">
              {filterArticles[currentIndex].title}
            </h2>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-2 animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-x-2">
            <div className="w-6 h-6 bg-zinc-900 rounded-full animate-beat-load"></div>
            <div className="w-6 h-6 bg-zinc-900 rounded-full animate-beat-load animation-delay-200"></div>
            <div className="w-6 h-6 bg-zinc-900 rounded-full animate-beat-load animation-delay-400"></div>
          </div>
        )}
      </div>
      <SlidingArticles topArticles={filterArticles} index={currentIndex} />
      <div className="absolute w-1/2 bottom-1/4 left-16 px-3 flex gap-x-8 items-center text-gray-100">
        <button
          className="w-8 h-8 border border-gray-100 rounded-full p-1 flex justify-center items-center text-xl"
          onClick={handlePrev}
        >
          <BiChevronLeft />
        </button>
        <div className="whitespace-pre text-lg font-medium">
          {currentIndex + 1} / {filterArticles.length}
        </div>
        <button
          className="w-8 h-8 border border-gray-100 rounded-full p-1 flex justify-center items-center text-xl"
          onClick={handleNext}
        >
          <BiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Feed;
