import {
  MutableRefObject,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { IArticlesData } from '../react-app-env';
import { getAllArticles } from '../services/articles';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import SlidingArticles from './slidingArticles';
import { GlobalContext } from '../context/GlobalContext';

const { innerWidth } = window;

const Feed = () => {
  const { topNewsData, loading } = useContext(GlobalContext);
  const [totalResults, setTotalResults] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [scrollOffset] = useState();
  const ref = useRef<HTMLDivElement>(null);

  const filterArticles = useMemo((): IArticlesData[] => {
    const filtredAtcl = topNewsData.filter(
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
        a.urlToImage !== null &&
        !a.url.includes('sport')
    );

    setTotalResults(filtredAtcl.length);

    return filtredAtcl;
  }, [topNewsData]);

  const handlePrev = () => {
    const lastEl = filterArticles.length - 1;
    // ref.current.scroll +=
    console.log(innerWidth);
    return currentIndex === 0
      ? setCurrentIndex(lastEl)
      : setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    const scrollOffset = innerWidth + currentIndex * innerWidth;
    // if (ref.current !== null) {
    //   ref.current.focus();
    //   ref.current.scrollLeft += scrollOffset;
    // }
    // console.log(innerWidth + (currentIndex + 1) * innerWidth);
    return currentIndex === filterArticles.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex((prev) => prev + 1);
  };

  return (
    <section className="w-screen h-screen overflow-x-hiden no-sctollbar select-none relative bg-top-color">
      {/* <div className="w-max h-fill overflow-x-auto aspect-w-16 aspwct-h-9">
        <div className="overflow-hiden relative"> */}
      {filterArticles.length && !loading ? (
        filterArticles.map((artcl, i) => (
          <div
            key={i}
            className={`absolute w-full h-full scroll-none transition duration-700 transform ${
              i === currentIndex
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-1/2'
            }`}
          >
            {i === currentIndex && (
              <img
                className="block w-full h-full"
                src={artcl.urlToImage || require('../assest/img/image.png')}
                loading="lazy"
                alt="..."
              />
            )}
            <h2 className="absolute bottom-1/3 left-4 lg:left-16 text-4xl leading-normal text-gray-100 lg:w-1/2 font-bold">
              {artcl.title}
            </h2>
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
        ))
      ) : (
        // (
        // <div
        //   style={{
        //     backgroundImage: `url(${filterArticles[currentIndex].urlToImage})`
        //   }}
        //   className="relative w-screen h-screen bg-cover shadow-inset"
        // >
        //   <h2 className="absolute bottom-1/3 left-4 lg:left-16 text-4xl leading-normal text-gray-100 lg:w-1/2 font-bold">
        //     {filterArticles[currentIndex].title}
        //   </h2>
        // </div>
        // )
        <div className="flex items-center justify-center space-x-2 animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-x-2">
          <div className="w-6 h-6 bg-zinc-900 rounded-full animate-beat-load"></div>
          <div className="w-6 h-6 bg-zinc-900 rounded-full animate-beat-load animation-delay-200"></div>
          <div className="w-6 h-6 bg-zinc-900 rounded-full animate-beat-load animation-delay-400"></div>
        </div>
      )}
      {/* </div> */}
      <SlidingArticles topArticles={filterArticles} index={currentIndex} />
      {/* <div className="absolute w-1/2 bottom-1/4 left-16 px-3 flex gap-x-8 items-center text-gray-100">
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
        </button> */}
      {/* </div> */}
      {/* <SlidingArticles topArticles={filterArticles} index={currentIndex} /> */}
    </section>
  );
};

export default Feed;
