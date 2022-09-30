import { useContext, useEffect, useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { AiTwotoneFire } from 'react-icons/ai';
import { getTime } from '../../assest/utils/utils';
import { GlobalContext } from '../../context/GlobalContext';
import { IArticlesDataGit } from '../../react-app-env';
import { SquarBtn } from '../buttons/LoadMoreBtns';
import { Link } from 'react-router-dom';

const ColumnArticles = () => {
  const { topNewsData, totalResults, setTotalResults } =
    useContext(GlobalContext);
  const [topNews, setTopNews] = useState<IArticlesDataGit[]>([]);
  const [selected, setSelected] = useState(0);
  const [start, setStart] = useState(0);
  const buttons = ['Всі', 'Новини', 'Статті'];

  const getMore = () => {
    setStart(start + 1);
    setTotalResults(totalResults + 5);
  };

  useEffect(() => {
    setTopNews(topNewsData);
  }, [topNewsData]);

  return (
    <section className="relative bg-white border rounded-md p-6 w-screen lg:w-[300px] min-h-full">
      <div className="flex justify-between items-center text-blue-main">
        <h4
          className={`block text-2xl font-semibold ${
            buttons ? 'pb-2' : 'pb-8'
          }`}
        >
          Всі новини
        </h4>
        <a
          className="text-sm border-0 border-b-2 border-neutral-700 hover:text-base"
          href="/"
        >
          Архів
        </a>
      </div>
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
      <div className=" overflow-y-auto h-[90%] no-sctollbar">
        {topNews.map((artcl, i) => {
          return (
            <div key={i} className="ms:w-64 blue-main py-6">
              {artcl.image_url !== null && (
                <span className=" flex gap-x-3 items-center mb-2 text-gray-400 text-sm">
                  <FaCamera />
                  Новина з фото
                </span>
              )}
              {artcl.category.includes('war') && (
                <span className=" flex gap-x-3 items-center mb-2 text-orange-400 text-sm">
                  <AiTwotoneFire />
                  Термінова новина
                </span>
              )}
              <h3 className="leading-6 whitespace-normal">
                <time className="font-thin text-sm text-gray-400 leading-5">
                  {getTime(artcl.pubDate)}
                  {'  '}
                </time>
                <Link to="/">{artcl.title}</Link>
              </h3>
              <hr className="mt-6" />
            </div>
          );
        })}
      </div>
      <div className=" absolute w-full bottom-5 left-0 pt-14 px-6 bg-gradient-to-t from-white to-white/70 ">
        <SquarBtn getMore={getMore} />
      </div>
    </section>
  );
};

export default ColumnArticles;
