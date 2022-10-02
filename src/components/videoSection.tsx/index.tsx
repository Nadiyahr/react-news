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
  const [title, setTitle] = useState('');
  const firstVideo =
    topNewsData.find((x) => x.video_url !== null)?.video_url ||
    'https://www.youtube.com/embed/UXe4i9-VZQA';

  useEffect(() => {
    console.log(firstVideo);
    const getTitle = async () => {
      await axios
        .get(`https://noembed.com/embed?dataType=json&url=${firstVideo}`)
        .then((res) => res)
        // eslint-disable-next-line no-console
        .then(({ data }) => console.log('fetch', data.title));
    };

    getTitle();
  }, []);
  return (
    <section className="relative">
      <section className="right-0 top-0 bg-stone-600/75 p-16">
        <div>
          <iframe
            width="640"
            height="360"
            src={firstVideo}
            frameBorder="1"
            color="white"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section>
        <div>{}</div>
      </section>
      <iframe
        width="640"
        height="360"
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
