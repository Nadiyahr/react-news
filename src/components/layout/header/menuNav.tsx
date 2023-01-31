import { HashLink } from 'react-router-hash-link';
import {
  FaTimes,
  FaChevronDown,
  FaChevronRight,
  FaChevronUp
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { sections } from '../../../assest/vars';
import { useOutsideClick } from '../../../assest/utils/utils';

type Props = {
  open: (value: boolean) => void;
  isOpen: boolean;
};

const MenuNav: React.FC<Props> = ({ open, isOpen }) => {
  const ref = useRef(null);
  const [openSelect, setOpenSelect] = useState<number | null>(null);
  const sectionsKeys = Object.keys(sections);

  useOutsideClick(ref, () => open(false));

  const handleClickClose = () => {
    open(!isOpen);
    setOpenSelect(null);
  };

  const handleClickSelect = (idx: number) =>
    setOpenSelect((prev) => (prev === idx ? null : idx));

  return (
    <div
      ref={ref}
      className={`fixed top-0 left-0 w-3/5 lg:w-1/5 h-screen bg-white z-10 border-r-2 overflow-auto no-sctollbar overscroll-contain border-blue-night/60 transform duration-700 ${
        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}
    >
      <div className=" sticky top-0 left-0 flex justify-between px-6 py-3 text-white pb-2 border-b-2 bg-blue-night">
        <div>Меню</div>
        <button onClick={handleClickClose} className="text-white text-sm">
          <FaTimes />
        </button>
      </div>
      <ul className=" items-center">
        {sectionsKeys.map((section, i) => (
          <div key={i}>
            <button
              onClick={() => handleClickSelect(i)}
              className=" flex justify-between w-3/4 mx-6 py-2 items-center capitalize border-b-2"
            >
              {/* <Link to="/" onClick={() => close(false)}>
              {section}
            </Link> */}
              {section}
              {sections[section as keyof typeof sections].length > 0 && (
                <span>
                  {openSelect === i ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              )}
            </button>
            {openSelect !== null && openSelect === i && (
              <div className="mb-2">
                {sections[section as keyof typeof sections].map((subS, idx) => (
                  <div
                    key={`${idx}s`}
                    className="flex justify-between w-4/6 mx-8 py-1 items-center capitalize border-b-2 border-grey-200/50"
                  >
                    {/* <HashLink
                    to="/#main"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }
                  > */}
                    {subS}
                    {/* </HashLink> */}
                    <button>
                      <FaChevronRight />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MenuNav;
