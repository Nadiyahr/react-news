import { useState } from 'react';
import { IArticlesData, IArticlesDataGit } from '../../../react-app-env';
import { SquarBtn } from '../../buttons/loadMoreBtns';

type Props = {
  data: IArticlesDataGit[];
  trasformDate: (d: Date) => string;
};

const MobileOurChoice: React.FC<Props> = ({ data, trasformDate }) => {
  const [ofset, setOfset] = useState(3);

  const getMore = () => {
    setOfset(ofset + 3);
  };

  return (
    <div className="flex flex-wrap gap-y-2 w-screen p-2 md:p-6">
      {data.map((n, i) => {
        return (
          i < ofset && (
            <div className="h-60 mb-10" key={i}>
              <div className="h-2/3">
                <img
                  className="w-fit h-full"
                  src={n.image_url || require('../../../assest/img/image.png')}
                  alt=""
                />
              </div>
              <div className="max-h-16 flex-row pt-4 px-2">
                <span className="text-xs">{trasformDate(n.pubDate)}</span>
                <h3 className="mt-3">{n.title}</h3>
              </div>
            </div>
          )
        );
      })}
      <div className="px-2">
        <SquarBtn getMore={getMore} diffBorder={'border-blue-night'} />
      </div>
    </div>
  );
};

export default MobileOurChoice;
