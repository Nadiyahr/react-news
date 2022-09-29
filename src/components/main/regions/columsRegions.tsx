import { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {
  IArticlesData,
  IArticlesDataGit,
  SizeColumn
} from '../../../react-app-env';
import { getTime } from '../../../assest/utils/utils';
import { CircleBtn } from '../../buttons/loadMoreBtns';

type Props = {
  title: string;
  data: IArticlesDataGit[];
};

const ColumnRgions: React.FC<Props> = ({ title, data }) => {
  const [rangeDisplayNews, setRangeDisplayNews] = useState([0, 5]);

  const loadMore = () => {
    const newRange = rangeDisplayNews.map((x) => x + 3);

    setRangeDisplayNews(newRange);
  };

  return (
    <section
      id={`#${title.toLowerCase()}`}
      className="relative bg-white border rounded-md p-4 md:p-6 min-w-[90%] h-full"
    >
      <div className="text-blue-main">
        <h4 className="block text-2xl font-semibold pb-8">{title}</h4>
      </div>
      <div className=" overflow-clip min-h-[85%] max-h-[85%] no-sctollbar">
        {data.map((artcl, i) => {
          if (i >= rangeDisplayNews[0] && i < rangeDisplayNews[1]) {
            return (
              <div key={i} className="ms:w-64 mb-6 blue-main">
                <h3>
                  <time className="font-thin text-sm text-gray-400 leading-5">
                    {getTime(artcl.pubDate)}
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
      <div className="absolute w-full bottom-5 left-0 pt-16 px-6 bg-gradient-to-t from-white to-white/70 ">
        <CircleBtn getMore={loadMore} />
      </div>
    </section>
  );
};

export default ColumnRgions;
