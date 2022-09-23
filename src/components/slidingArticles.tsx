import { IArticlesData } from '../react-app-env';

type Props = {
  topArticles: IArticlesData[];
  index: number;
};

const SlidingArticles: React.FC<Props> = ({ topArticles, index }) => {
  return (
    <div className="px-4 lg:px-16 py-1 overflow-hiden sticky no-sctollbar top-[80%] left-3 w-screen">
      <div className="flex overflow-x-auto no-sctollbar gap-x-7">
        {topArticles.map((artcl, i) => (
          <div
            key={i}
            className={`flex-shrink-0 w-72 h-20 rounded-xl text-white text-xs p-1 ${
              i === index ? 'bg-stone-800/[0.4]' : 'bg-stone-800/75'
            }`}
          >
            <div className="flex gap-x-2 px-2 py-3">
              <img
                src={artcl.urlToImage || ''}
                alt=".."
                className="block w-16 h-12"
              />
              <div className=" p-0 h-12 overflow-hidden">{artcl.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingArticles;
