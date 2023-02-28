import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import { IArticlesDataGit } from '../../react-app-env';
import Image from '../image';

type Props = {
  topArticles: IArticlesDataGit[];
};

const SlidingArticles: React.FC<Props> = ({ topArticles }) => {
  const { index, dispatchIndex } = useContext(GlobalContext);
  return (
    <div className="px-0 md:px-3 lg:px-16 py-1 overflow-hiden sticky no-sctollbar top-[77%] left-2 w-screen z-20">
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
                  e.currentTarget.src = require('../../assest/img/no-img.png');
                }}
                src={artcl.image_url || ''}
                alt=".."
                className="block w-16 h-12"
              />
              <Link className="p-0 py h-12 overflow-hidden" to="/">
                {artcl.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingArticles;
