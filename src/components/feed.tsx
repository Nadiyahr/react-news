import { useEffect, useState } from 'react';
import json from '../assest/json/news.json';
import { IArticlesData } from '../react-app-env';
import { getAllArticles } from '../services/articles';

const Feed = () => {
  const [atricles, setArticles] = useState<IArticlesData[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((response) => {
      console.log(response);
      setArticles(response.articles);
      setTotalResults(response.totalResults);
      setLoading(false);
    });
  }, []);
  return (
    <main className="carousel slide relative">
      <div className="carousel-inner relative w-full h-screen overflow-hidden">
        {atricles.length &&
          atricles.map((artcl, i) => {
            const img = artcl.urlToImage;
            return (
              <div
                key={i}
                className="carousel-item active relative float-left w-full h-screen "
              >
                <h1 className="font-bold w-3/5 text-4xl text-white absolute bottom-48 left-16">
                  {artcl.title}
                </h1>
                <img
                  src={
                    artcl.urlToImage
                      ? artcl.urlToImage
                      : '../assest/img/shadow.png'
                  }
                  className="block w-full h-screen object-fill"
                  alt="Exotic Fruits"
                />
              </div>
            );
          })}
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
        ></button>
      </div>
    </main>
    // <main
    //   id="carousel"
    //   className="carousel slide relative"
    //   data-bs-ride="carousel"
    // >
    //   <div className="carousel-inner relative w-full overflow-hidden">
    //     {atricles.length &&
    //       atricles.map((arcl, i) => (
    //         <div
    //           key={i}
    //           className="carousel-item active relative float-left w-full"
    //           // style={{ backgroundImage: `url(${arcl.urlToImage})` }}
    //         >
    //           <img
    //             src={
    //               arcl.urlToImage ? arcl.urlToImage : '../assest/img/shadow.png'
    //             }
    //             className="block w-full"
    //             alt="Exotic Fruits"
    //           />
    //           <h2 className="text-lg text-white absolute bottom-0 left-14">
    //             {arcl.title}
    //           </h2>
    //         </div>
    //       ))}
    //     <button
    //       className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    //       type="button"
    //       data-bs-target="#carousel"
    //       data-bs-slide="prev"
    //     >
    //       <span
    //         className="carousel-control-prev-icon inline-block bg-no-repeat"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    //       type="button"
    //       data-bs-target="#carousel"
    //       data-bs-slide="next"
    //     ></button>
    //   </div>
    // </main>
  );
};

export default Feed;
