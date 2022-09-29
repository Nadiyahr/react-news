import { useContext, useState } from 'react';
import { TbMenu, TbSearch, TbMinusVertical } from 'react-icons/tb';
import {
  FaFacebook,
  FaTelegram,
  FaInstagramSquare,
  FaYoutube,
  FaSearch
} from 'react-icons/fa';
import { GlobalContext } from '../../../context/GlobalContext';
import MenuNav from './menuNav';
import { cities } from '../../../assest/vars';

const NavBar: React.FC = () => {
  const { isNotMobile, isMobile } = useContext(GlobalContext);
  const [title, setTitle] = useState('');
  const [search, setSearch] = useState(false);
  const [togleNav, setTogleNav] = useState(false);
  return (
    <nav className="relative px-6 py-4 md:px-16 text-base flex justify-between font-medium border border-gray-200">
      <div className="flex items-center gap-x-4">
        <button
          onClick={() => setTogleNav(!togleNav)}
          className="flex text-lg bg-gray-ligt hover:bg-gray-200 cursor-pointer rounded py-1 px-2"
        >
          <span className="pt-1 pr-2">
            <TbMenu />
          </span>
          Меню
        </button>
        <MenuNav close={setTogleNav} isClose={togleNav} />
        {isNotMobile &&
          cities.map((city, i) => (
            <button key={i} className="capitalize">
              {city}
            </button>
          ))}
      </div>
      <div className="relative w-max flex justify-evenly items-center gap-x-2 md:gap-x-4">
        {(search || isNotMobile) && (
          <>
            <span className="absolute top-4 left-2 text-gray-400">
              <TbSearch />
            </span>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="пошук новин"
              value={title}
              className="p-4 pl-8 text-xs font-medium w-3/5/5 md:w-56 h-3/5 bg-gray-ligt focus:outline-none focus:ring-0 focus:bg-gray-200 rounded-xl"
              onChange={(e) => setTitle(e.target.value)}
            />
          </>
        )}
        {isMobile && !search && (
          <div className="">
            <button
              onClick={() => setSearch(true)}
              className="text-gray-icon pt-2 px-2"
            >
              <FaSearch />
            </button>
            <select className="outline-none" name="language" id="lang">
              <option value="ua">UA</option>
              <option value="ru">RU</option>
            </select>
          </div>
        )}
        {isNotMobile && (
          <>
            <button className="text-gray-icon pt-2 px-1">
              <FaFacebook />
            </button>
            <button className="text-gray-icon pt-2 px-1">
              <FaTelegram />
            </button>
            <button className="text-gray-icon pt-2 px-1">
              <FaInstagramSquare />
            </button>
            <button className="text-gray-icon pt-2 px-1">
              <FaYoutube />
            </button>
            <button className="text-gray-icon pt-2 px-1">
              <TbMinusVertical />
            </button>
            <button className="text-gray-400 pt-2 px-1 text-light">RU</button>
            <button className="text-gray-icon pt-2 px-1 text-light">UA</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
