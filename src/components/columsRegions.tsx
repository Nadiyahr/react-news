import { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IArticlesData, SizeColumn } from '../react-app-env';

type Props = {
  title: string;
  data: IArticlesData[];
};

const ColumnRgions: React.FC<Props> = ({ title, data }) => {
  const [selected, setSelected] = useState(0);
  const [rangeDisplayNews, setRangeDisplayNews] = useState([0, 5]);

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
    <section className="relative bg-white border rounded-md p-6 w-[290px] h-[760px]">
      <div className="flex justify-between items-center text-blue-main">
        <h4 className="block text-2xl font-semibold pb-8">{title}</h4>
      </div>
      <div className=" overflow-clip min-h-[85%] max-h-[85%] no-sctollbar">
        {data.map((artcl, i) => {
          if (i >= rangeDisplayNews[0] && i < rangeDisplayNews[1]) {
            return (
              <div key={i} className="ms:w-64 mb-6 blue-main">
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
      <div className=" sticky bottom-0 left-0 pt-10">
        <button className=" flex w-full justify-start gap-x-8 items-center font-medium text-blue-900">
          <span className="blue-main">Більше новин</span>
          <div className="border rounded-full p-2">
            <AiOutlineArrowRight />
          </div>
        </button>
      </div>
    </section>
  );
};

export default ColumnRgions;
