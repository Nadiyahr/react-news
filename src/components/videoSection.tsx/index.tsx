import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { IArticlesDataGit } from '../../react-app-env';

type Data = {
  author_name: string;
  author_url: string;
  height: number;
  html: string;
  provider_name: string;
  provider_url: string;
  thumbnail_height: 360;
  thumbnail_url: string;
  thumbnail_width: number;
  title: string;
  type: string;
  url: string;
  version: string;
  width: number;
};

const VideoSection = () => {
  const { topNewsData } = useContext(GlobalContext);
  const [title, setTitle] = useState({
    'UXe4i9-VZQA': '',
    '8Xtcd9qSMeU': '',
    P_1iiDSb7FM: '',
    JpTL53Su4U8: '',
    CwQl49tDPTk: ''
  });
  const videos = ['8Xtcd9qSMeU', 'P_1iiDSb7FM', 'JpTL53Su4U8', 'CwQl49tDPTk'];
  const firstVideo =
    topNewsData.find((x) => x.video_url !== null)?.video_url ||
    'https://www.youtube.com/embed/UXe4i9-VZQA';

  useEffect(() => {
    const getTitle = async () => {
      const httpArr = videos.map((v) =>
        axios.get(`https://noembed.com/embed?dataType=json&url=${v}`)
      );

      await axios.all(httpArr).then(
        axios.spread((...res) => {
          res.forEach((r) => console.log(r));
        })
      );
      await axios
        .get(`https://noembed.com/embed?dataType=json&url=${firstVideo}`)
        .then((res) => {
          console.log('topNewsData', topNewsData);
          return res;
        })
        // eslint-disable-next-line no-console
        .then(({ data }) => {
          console.log('fetch', data);
          setTitle(data.title);
        });
    };

    getTitle();
  }, []);
  return (
    <section className="relative ">
      <section className="bg-stone-500/90 p-16 flex gap-6 h-fit">
        <div className="">
          <iframe
            width="580"
            height="400"
            src={firstVideo}
            frameBorder="1"
            color="white"
            allowFullScreen
          ></iframe>
          {/* <iframe
            width="560"
            height="315"
            src={firstVideo}
            frameBorder="0"
          ></iframe> */}
          <div className="p-6 w-full">
            <h3 className="text-3xl leading-10 font-semibold text-white">
              {title['8Xtcd9qSMeU']}
            </h3>
          </div>
        </div>
        <section>
          <div className="grid grid-cols-2 gap-4 place-content-stretch ">
            {videos.map((video, idx) => (
              <div key={idx}>
                <iframe
                  width="304"
                  height="171"
                  src={`https://www.youtube.com/embed/${video}`}
                  color="white"
                  allowFullScreen
                ></iframe>
                <div className="p-6 w-full">
                  <h3 className="text-base leading-5 font-semibold text-white">
                    {title[video as keyof typeof title]}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      <iframe
        width="304"
        height="117"
        src={`${firstVideo}`}
        frameBorder="0"
        color="white"
        allowFullScreen
        className=" absolute top-0 left-0 min-w-full min-h-full -z-50"
      ></iframe>
    </section>
  );
};

export default VideoSection;
