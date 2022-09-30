import { Sections } from '../../../assest/vars';

type Props = {
  keysSec: string[];
  options?: Sections;
  range?: number[];
  flex?: boolean;
};

const Column: React.FC<Props> = ({ keysSec, options, range, flex }) => {
  return (
    <div
      className={`text-blue-night leading-5 w-max ${
        flex && 'flex-row w-max mx-auto'
      }`}
    >
      {range && options
        ? keysSec.map(
            (section, i) =>
              i >= range[0] &&
              i <= range[1] && (
                <div key={i} className="pb-6">
                  <button className="font-semibold text-base hover:font-extrabold">
                    {section}
                  </button>
                  {options &&
                    options[section as keyof Sections].length > 0 &&
                    options[section as keyof Sections].map(
                      (subS: string, idx: number) => (
                        <a
                          key={`${idx}s`}
                          className="block cursor-pointer font-normal hover:font-semibold text-sm py-2"
                        >
                          {subS}
                        </a>
                      )
                    )}
                </div>
              )
          )
        : keysSec.map((section, i) => (
            <div key={i} className={`pb-6 ${flex && 'flex justify-center'} `}>
              <a
                href="/"
                className="font-semibold text-base hover:font-extrabold"
              >
                {section.toUpperCase()}
              </a>
            </div>
          ))}
    </div>
  );
};

export default Column;
