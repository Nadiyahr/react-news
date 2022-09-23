import { AiTwotoneFire } from 'react-icons/ai';

const NavSections = () => {
  return (
    <nav className="px-16 py-1 flex gap-x-10 font-bold border border-t-0 border-gray-200 h-min">
      <button className="flex text-orange-400 hover:text-orange-300 cursor-pointer px-1">
        <span className="pt-1 pr-1">
          <AiTwotoneFire />
        </span>
        війна
      </button>
      <button className="flex hover:text-orange-300 cursor-pointer px-1">
        новини
      </button>
      <button className="flex hover:text-orange-300 cursor-pointerpx-1">
        політика
      </button>
      <button className="flex hover:text-orange-300 cursor-pointer px-1">
        економіка
      </button>
      <button className="flex hover:text-orange-300 cursor-pointer px-1">
        суспільство
      </button>
      <button className="flex hover:text-orange-300 cursor-pointer px-1">
        погляди
      </button>
      <button className="flex hover:text-orange-300 cursor-pointer px-1">
        світ
      </button>
    </nav>
  );
};

export default NavSections;
