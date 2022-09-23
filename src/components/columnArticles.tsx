import { useContext, useEffect, useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import {
  AiTwotoneFire,
  AiOutlineReload,
  AiOutlineArrowRight
} from 'react-icons/ai';
import { GlobalContext } from '../context/GlobalContext';
import { LoadButton } from '../react-app-env';

type Props = {
  buttons?: string[];
  title: string;
  span?: string;
  range?: number[];
  loadButton: LoadButton;
};

const columnArticles: React.FC<Props> = ({
  buttons = [],
  title,
  span,
  range = [0, 5],
  loadButton
}) => {
  const { topNewsData } = useContext(GlobalContext);
  const [selected, setSelected] = useState(0);
  const [rangeDisplayNews, setRangeDisplayNews] =
    useState<Array<number>>(range);

  const getTime = (time: Date) => {
    return new Date(time).toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const loadMore = () => {
    const newRange = rangeDisplayNews.map((x) => x + 9);

    setRangeDisplayNews(newRange);
  };

  return (
    <section className="lg:w-1/4 w-full h-fit bg-white border rounded-md p-6">
      <div className="flex justify-between items-center text-blue-main">
        <h4 className=" block text-2xl font-semibold">{title}</h4>
        {span?.length && (
          <a
            className="text-sm border-0 border-b-2 border-neutral-700 hover:text-base"
            href="/"
          >
            {span}
          </a>
        )}
      </div>
      <div className=" flex gap-x-4 py-2 pb-8">
        {buttons.length &&
          buttons.map((btn, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`rounded hover:bg-orange-100 active:bg-orange-100 px-2 ${
                selected === i && 'bg-orange-100'
              }`}
            >
              {btn}
            </button>
          ))}
      </div>
      <div>
        {topNewsData.map((artcl, i) => {
          if (i >= rangeDisplayNews[0] && i < rangeDisplayNews[1]) {
            return (
              <div key={i} className="ms:w-64 mb-6 blue-main">
                {artcl.urlToImage !== null && (
                  <span className=" flex gap-x-3 items-center mb-2 text-gray-400 text-sm">
                    <FaCamera />
                    Новина з фото
                  </span>
                )}
                {artcl.url !== null &&
                  artcl.url.includes(
                    '/rubric-ato/' || '/news-isw-viyna-zvit/'
                  ) && (
                    <span className=" flex gap-x-3 items-center mb-2 text-orange-400 text-sm">
                      <AiTwotoneFire />
                      Термінова новина
                    </span>
                  )}
                <h3>
                  <span className="font-thin text-sm text-gray-400 leading-5">
                    {getTime(artcl.publishedAt)}
                  </span>
                  {'  '}
                  {artcl.title}
                </h3>
                <hr className="my-3" />
              </div>
            );
          }
        })}
        {loadButton.type === 'square' && (
          <button
            onClick={loadMore}
            className="border rounded flex justify-center gap-x-1 items-center py-1 px-4 w-full text-blue-900"
          >
            <AiOutlineReload />
            {loadButton.name}
          </button>
        )}
        {loadButton.type === 'circle' && (
          <button className="flex w-1/2 justify-between items-center font-medium text-blue-900">
            <span className="blue-main">{loadButton.name}</span>
            <div className="border rounded-full p-2">
              <AiOutlineArrowRight />
            </div>
          </button>
        )}
      </div>
    </section>
  );
};

export default columnArticles;
