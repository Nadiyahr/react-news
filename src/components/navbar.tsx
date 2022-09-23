import { useState } from 'react';
import { TbMenu, TbSearch, TbMinusVertical } from 'react-icons/tb';
import {
  FaFacebook,
  FaTelegram,
  FaInstagramSquare,
  FaYoutube
} from 'react-icons/fa';

const NavBar: React.FC = () => {
  const [title, setTitle] = useState('');
  return (
    <nav className="px-16 py-1 text-base flex justify-between font-medium border border-gray-200">
      <div className="flex items-center gap-x-4">
        <button className="flex text-lg bg-gray-ligt hover:bg-gray-200 cursor-pointer rounded py-1 px-2">
          <span className="pt-1 pr-2">
            <TbMenu />
          </span>
          Меню
        </button>
        <button>Київ</button>
        <button>Одеса</button>
        <button>Харків</button>
      </div>
      <div className="relative w-max flex justify-evenly items-center gap-x-4">
        <span className="absolute top-4 left-2 text-gray-400">
          <TbSearch />
        </span>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="пошук новин"
          value={title}
          className="p-4 pl-8 text-xs font-medium w-56 h-3/5 bg-gray-ligt focus:outline-none focus:ring-0 focus:border rounded-xl"
          onChange={(e) => setTitle(e.target.value)}
        />
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
      </div>
    </nav>
  );
};

export default NavBar;
