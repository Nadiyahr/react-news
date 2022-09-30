import { useState } from 'react';
import { FaChevronDown, FaChevronRight, FaChevronUp } from 'react-icons/fa';
import { sections } from '../../assest/vars';

const UlMenu = () => {
  const [openSelect, setOpenSelect] = useState<number | null>(null);
  const sectionsKeys = Object.keys(sections);

  const handleClickSelect = (idx: number) =>
    setOpenSelect((prev) => (prev === idx ? null : idx));

  return (
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
  );
};

export default UlMenu;
