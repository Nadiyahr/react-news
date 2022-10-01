import { useContext, useEffect, useMemo } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import { IconData, Icons, Stats } from '../../../react-app-env';
import { warTitles } from '../../../assest/json/warIcons';
import { Link } from 'react-router-dom';

const Slider = () => {
  const { warIcons, warStatistics } = useContext(GlobalContext);

  const statisticsWithIcons = useMemo((): IconData[] | [] => {
    if (warIcons && warStatistics) {
      const keys = Object.keys(warIcons);
      return keys.map(
        (key: string): IconData => ({
          title: warTitles[key as keyof Icons].title,
          icon: warIcons[key as keyof Icons].icon.replace(
            /icons/,
            'icons-dark'
          ),
          stats: warStatistics.stats[key as keyof Stats]
        })
      );
    } else {
      return [];
    }
  }, [warStatistics]);

  return (
    <div className="px-6 md:px-4 lg:pl-16 py-1 flex bg-blue-night relative text-sm">
      <div className="flex absolute gap-x-10 overflow-x-auto no-sctollbar w-[98%] md:w-[88%]">
        <div className="flex text-white gap-x-10 animate-scroll-text whitespace-nowrap">
          {statisticsWithIcons.map((stat, i) => (
            <span key={i} className="flex gap-x-2">
              <span className=" w-7">
                <img src={stat.icon} alt={stat.title} className="inline" />
              </span>
              {stat.title}
              <span className="text-orange-400">{stat.stats}</span>
            </span>
          ))}
        </div>
        {/* animate-scroll-text2 animate-scroll-text pt-1 */}
        <div className="flex text-white gap-x-10 animate-scroll-text2 whitespace-nowrap">
          {statisticsWithIcons.map((stat, i) => (
            <span key={i} className="flex gap-x-2 items-center">
              <span className=" w-7">
                <img src={stat.icon} alt={stat.title} className="inline" />
              </span>
              {stat.title}
              <span className="text-orange-400">{stat.stats}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="text-white h-full from-blue-night bg-gradient-to-r backdrop-blur-sm min-w-[90px] md:min-w-[190px] sticky top-0 md:right-[91%] pr-1 ">
        <a href="https://russianwarship.rip/" target="blanck">
          {warStatistics !== null && warStatistics.day}&nbsp;день&nbsp;війни:
        </a>
      </div>
    </div>
  );
};

export default Slider;
