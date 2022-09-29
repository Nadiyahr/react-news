import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { IArticlesDataGit } from '../../react-app-env';

type Props = {
  topArticles: IArticlesDataGit[];
};

const SlidingArticles: React.FC<Props> = ({ topArticles }) => {
  const { index, dispatchIndex } = useContext(GlobalContext);
  return (
    <div className="px-0 md:px-3 lg:px-16 py-1 overflow-hiden sticky no-sctollbar top-[77%] left-2 w-screen">
      <div className="flex overflow-x-auto no-sctollbar gap-x-7 snap-x">
        {topArticles.map((artcl, i) => (
          <div
            key={i}
            onClick={() => dispatchIndex({ type: 'SET', payload: i })}
            className={`flex-shrink-0 w-72 h-20 rounded-xl text-white text-xs p-1 snap-start ${
              i === index.index ? 'bg-stone-800/[0.4]' : 'bg-stone-800/75'
            }`}
          >
            <div className="flex gap-x-2 px-2 py-3">
              <img
                onError={(e) => {
                  e.currentTarget.src = require('../../assest/img/image.png');
                }}
                src={artcl.image_url || ''}
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
