import { Link } from 'react-router-dom';
import { IArticlesDataGit } from '../../../react-app-env';
import Image from '../../image';

type Props = {
  data: IArticlesDataGit[];
  trasformDate: (d: string) => string;
};

const DesctopOurChoice: React.FC<Props> = ({ data, trasformDate }) => {
  return (
    <section>
      <div className="grid grid-cols-3 gap-4 place-content-stretch min-h-full">
        {data.map((n, i) => {
          return (
            i < 6 && (
              <div className="h-60 mb-10" key={i}>
                <div className="h-2/3">
                  <Image imgUrl={n.image_url} />
                </div>
                <div className="max-h-16 flex-row pt-4">
                  <span className="text-xs mb-3 cursor-pointer">
                    {trasformDate(n.pubDate)}
                  </span>
                  <Link to="/" className="block text-blue-night b mt-3">
                    {n.title}
                  </Link>
                </div>
              </div>
            )
          );
        })}
      </div>
    </section>
  );
};

export default DesctopOurChoice;
