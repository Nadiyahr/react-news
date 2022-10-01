import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IArticlesData, IArticlesDataGit } from '../../../react-app-env';
import { SquarBtn } from '../../buttons/LoadMoreBtns';
import Image from '../../image';

type Props = {
  data: IArticlesDataGit[];
  trasformDate: (d: string) => string;
};

const MobileOurChoice: React.FC<Props> = ({ data, trasformDate }) => {
  const [ofset, setOfset] = useState(3);

  const getMore = () => {
    setOfset(ofset + 3);
  };

  return (
    <div className="flex flex-wrap gap-y-2 w-screen p-4 min-h-fit md:p-6">
      {data.map((n, i) => {
        return (
          i < ofset && (
            <div className="min-h-60 mb-10" key={i}>
              <div className="h-2/3 mb-2">
                <Image imgUrl={n.image_url} />
              </div>
              <span className="text-xs">{trasformDate(n.pubDate)}</span>
              <div className="max-h-fit flex-row overflow-y-auto mt-2">
                <Link to="/" className="block text-blue-night b mt-3">
                  {n.title}
                </Link>
              </div>
            </div>
          )
        );
      })}
      <div className="px-2 mt-2">
        <SquarBtn getMore={getMore} diffBorder={'border-blue-night'} />
      </div>
    </div>
  );
};

export default MobileOurChoice;
