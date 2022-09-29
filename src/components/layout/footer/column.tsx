import { Sections } from '../../../assest/vars';

type Props = {
  keysSec: string[];
  options?: Sections;
  range?: number[];
};

const Column: React.FC<Props> = ({ keysSec, options, range }) => {
  return (
    <div className="text-blue-night leading-5 w-max">
      {range && options
        ? keysSec.map(
            (section, i) =>
              i >= range[0] &&
              i <= range[1] && (
                <div key={i} className="pb-6">
                  <h4 className="font-semibold text-base">{section}</h4>
                  {options &&
                    options[section as keyof Sections].length > 0 &&
                    options[section as keyof Sections].map(
                      (subS: string, idx: number) => (
                        <h5
                          key={`${idx}s`}
                          className="font-normal text-sm py-2"
                        >
                          {subS}
                        </h5>
                      )
                    )}
                </div>
              )
          )
        : keysSec.map((section, i) => (
            <div key={i} className="pb-6">
              <h4 className="font-semibold text-base">
                {section.toUpperCase()}
              </h4>
            </div>
          ))}
    </div>
  );
};

export default Column;
