import { useContext, useEffect, useState } from 'react';
import { IArticlesData } from '../react-app-env';
import { getAllArticles } from '../services/articles';
import { FaCamera } from 'react-icons/fa';
import { AiTwotoneFire, AiOutlineReload } from 'react-icons/ai';
import { GlobalContext } from '../context/GlobalContext';

const SidebarAllNews = () => {
  const { topNewsData } = useContext(GlobalContext);
  const [selected, setSelected] = useState(0);
  const [rangeDisplayNews, setRangeDisplayNews] = useState<Array<number>>([
    0, 9
  ]);
  const buttons = ['Всі', 'Новини', 'Статті'];

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
    <section className="w-1/4 h-fit bg-white border rounded-md p-6">
      <div className="flex justify-between items-center">
        <h4 className=" block text-2xl">Всі новини</h4>
        <a href="/" className="underline">
          Архів
        </a>
      </div>
      <div className=" flex gap-x-4 py-2 pb-8">
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
      <div>
        {topNewsData.map((artcl, i) => {
          if (i >= rangeDisplayNews[0] && i < rangeDisplayNews[1]) {
            return (
              <div key={i} className="ms:w-64 mb-6">
                {artcl.urlToImage !== null && (
                  <span className=" flex gap-x-3 items-center mb-4 text-gray-400 text-sm">
                    <FaCamera />
                    Новина з фото
                  </span>
                )}
                {artcl.url.includes(
                  '/rubric-ato/' || '/news-isw-viyna-zvit/'
                ) && (
                  <span className=" flex gap-x-3 items-center mb-4 text-orange-400 text-sm">
                    <AiTwotoneFire />
                    Термінова новина
                  </span>
                )}
                <span className="font-thin text-sm text-gray-400">
                  {getTime(artcl.publishedAt)}
                </span>
                {'  '}
                {artcl.title}
                <hr className="my-6" />
              </div>
            );
          }
        })}
        <button
          onClick={loadMore}
          className="border rounded flex justify-center gap-x-1 items-center py-1 px-4 w-full"
        >
          <AiOutlineReload />
          Завантажити ще
        </button>
      </div>
    </section>
  );
};

export default SidebarAllNews;
