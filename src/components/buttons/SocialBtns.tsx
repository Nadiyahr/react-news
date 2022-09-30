import {
  FaFacebook,
  FaTelegram,
  FaInstagramSquare,
  FaYoutube,
  FaTiktok,
  FaGoogle
} from 'react-icons/fa';
import { TbMinusVertical } from 'react-icons/tb';
import '../../assest/img/news_google_icon.svg';

type Props = {
  isColor: boolean;
  classN: string;
};

const SocialBtns: React.FC<Props> = ({ isColor, classN }) => {
  const networks = [
    {
      name: 'YouTube',
      icon: {
        alt: 'youtube',
        src: 'youtube_logo_icon.svg',
        faIcon: <FaYoutube />,
        href: 'https://www.youtube.com/'
      }
    },
    {
      name: 'Instagram',
      icon: {
        alt: 'instagram',
        src: 'instagram_logo_icon.svg',
        faIcon: <FaInstagramSquare />,
        href: 'https://www.instagram.com/'
      }
    },
    {
      name: 'Facebook',
      icon: {
        alt: 'facebook',
        src: 'facebook_logo_icon.svg',
        faIcon: <FaFacebook />,
        href: 'https://www.facebook.com/'
      }
    },
    {
      name: 'Telegram',
      icon: {
        alt: 'telegram',
        src: 'telegram_logo_icon.svg',
        faIcon: <FaTelegram />,
        href: 'https://web.telegram.org/'
      }
    },
    {
      name: 'TikTok',
      icon: {
        alt: 'tiktok',
        src: 'tiktok_logo_icon.svg',
        faIcon: null,
        href: 'https://www.tiktok.com/'
      }
    },
    {
      name: 'Google News',
      icon: {
        alt: 'google news',
        src: 'news_google_icon.svg',
        faIcon: null,
        href: 'https://news.google.com/topstories?hl=it&gl=IT&ceid=IT:it'
      }
    }
  ];
  return (
    <div className={classN}>
      {networks.map((network, i) => (
        <a
          target="blank"
          href={network.icon.href}
          key={i}
          className={`${
            !isColor && network.icon.faIcon === null
              ? 'hidden'
              : 'pt-2 px-1 text-gray-icon flex gap-x-2'
          }`}
        >
          {isColor ? (
            <>
              <img
                alt={network.icon.alt}
                className="w-5"
                src={require(`../../assest/img/${network.icon.src}`)}
              />
              <span className=" text-sm font-normal leading-5 text-blue-night hover:text-blue-900">
                {network.name}
              </span>
            </>
          ) : (
            network.icon.faIcon
          )}
        </a>
      ))}
      {!isColor && (
        <>
          <span className={`text-gray-icon pt-2 px-1`}>
            <TbMinusVertical />
          </span>
          <button className="text-gray-400 pt-2 px-1 text-light">RU</button>
          <button className="text-gray-icon pt-2 px-1 text-light">UA</button>
        </>
      )}
    </div>
  );
};

export default SocialBtns;
