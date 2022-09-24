import { useContext, useEffect, useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import {
  AiTwotoneFire,
  AiOutlineReload,
  AiOutlineArrowRight
} from 'react-icons/ai';
import { IArticlesData, SizeColumn } from '../react-app-env';
import { LoadButton } from '../react-app-env';

type Props = {
  buttons?: string[];
  title: string;
  span?: string;
  range?: number[];
  loadButton: LoadButton;
  data: IArticlesData[];
  icons: boolean;
  size: SizeColumn;
};

const ColumnArticles: React.FC<Props> = ({
  buttons,
  title,
  span,
  range = [0, 5],
  loadButton,
  data,
  icons,
  size
}) => {
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
    <section
      className={` relative bg-white border overflow-hiden no-sctollbar rounded-md p-6 ${size.width} ${size.height}`}
    >
      <div className="flex justify-between items-center text-blue-main">
        <h4
          className={`block text-2xl font-semibold ${
            buttons ? 'pb-2' : 'pb-8'
          }`}
        >
          {title}
        </h4>
        {span?.length && (
          <a
            className="text-sm border-0 border-b-2 border-neutral-700 hover:text-base"
            href="/"
          >
            {span}
          </a>
        )}
      </div>
      {buttons && (
        <div className=" flex gap-x-4 pb-4">
          {buttons.map((btn, i) => (
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
      )}
      <div className="overflow-y-auto no-sctollbar">
        {data.map((artcl, i) => {
          if (i >= rangeDisplayNews[0] && i < rangeDisplayNews[1]) {
            return (
              <div key={i} className="ms:w-64 mb-6 blue-main">
                {icons && artcl.urlToImage !== null && (
                  <span className=" flex gap-x-3 items-center mb-2 text-gray-400 text-sm">
                    <FaCamera />
                    Новина з фото
                  </span>
                )}
                {icons &&
                  artcl.url !== null &&
                  artcl.url.includes(
                    '/rubric-ato/' || '/news-isw-viyna-zvit/'
                  ) && (
                    <span className=" flex gap-x-3 items-center mb-2 text-orange-400 text-sm">
                      <AiTwotoneFire />
                      Термінова новина
                    </span>
                  )}
                <h3>
                  <time className="font-thin text-sm text-gray-400 leading-5">
                    {getTime(artcl.publishedAt)}
                  </time>
                  {'  '}
                  {artcl.title}
                </h3>
                <hr className="my-3" />
              </div>
            );
          }
        })}
      </div>
      {loadButton.type === 'square' && (
        <button
          onClick={loadMore}
          className=" sticky bottom-0 border rounded flex justify-center gap-x-1 items-center py-1 px-4 w-full text-blue-900"
        >
          <AiOutlineReload />
          {loadButton.name}
        </button>
      )}
      {loadButton.type === 'circle' && (
        <button className="flex w-full justify-start gap-x-8 items-center font-medium text-blue-900">
          <span className="blue-main">{loadButton.name}</span>
          <div className="border rounded-full p-2">
            <AiOutlineArrowRight />
          </div>
        </button>
      )}
    </section>
  );
};

export default ColumnArticles;
