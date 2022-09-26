import { IArticlesData } from '../react-app-env';

type Props = {
  data: IArticlesData[];
  trasformDate: (d: Date) => string;
};

const DesctopOurChoice: React.FC<Props> = ({ data, trasformDate }) => {
  return (
    <section>
      <div className="grid grid-cols-3 gap-4 place-content-stretch ">
        {data.map((n, i) => {
          return (
            i < 6 && (
              <div className="h-60 mb-10" key={i}>
                <div className="h-2/3">
                  <img
                    className="w-full h-full"
                    src={n.urlToImage || require('../assest/img/image.png')}
                    alt=""
                  />
                </div>
                <div className="max-h-16 flex-row pt-4">
                  <span className="text-xs mb-3">
                    {trasformDate(n.publishedAt)}
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
