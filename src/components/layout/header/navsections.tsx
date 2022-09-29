import { useContext, useState } from 'react';
import { AiTwotoneFire } from 'react-icons/ai';
import { GlobalContext } from '../../../context/GlobalContext';

const NavSections = () => {
  const { isNotMobile } = useContext(GlobalContext);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const sections = [
    'війна',
    'новини',
    'політика',
    'економіка',
    'суспільство',
    'погляди',
    'світ'
  ];

  return (
    <nav className="px-6 lg:px-16 py-1 flex justify-between font-bold border border-t-0 border-gray-200 h-min">
      <ul className="flex overflow-auto no-sctollbar gap-x-2 lg:gap-x-10">
        {sections.map((section, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            className={`flex hover:text-orange-300 text-sm px-1 uppercase ${
              i === selectedIndex && 'text-orange-400'
            }`}
          >
            {section === 'війна' && (
              <span className="pt-1 pr-1">
                <AiTwotoneFire />
              </span>
            )}
            <li className="block">{section}</li>
          </button>
        ))}
      </ul>
      <button className="flex justify-end md:justify-between items-center w-16">
        <div className="rounded-full bg-red-300 w-4 h-4 flex justify-center items-center">
          <div className="rounded-full bg-red-700 w-2 h-2"></div>
        </div>
        {isNotMobile && <span className="text-sm px-1 uppercase ">Live</span>}
      </button>
    </nav>
  );
};

export default NavSections;
