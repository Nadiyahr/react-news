import { IArticlesData, IArticlesDataGit } from '../../../react-app-env';
import Image from '../../image';

type Props = {
  data: IArticlesDataGit[];
  trasformDate: (d: Date) => string;
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
                  <span className="text-xs mb-3">
                    {trasformDate(n.pubDate)}
                  </span>
                  <h3 className=" mt-3">{n.title}</h3>
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
