import { useEffect } from 'react';
import { sections } from '../../../assest/vars';

const TopFooter = () => {
  const sectionsKeys = Object.keys(sections);
  useEffect(() => {
    // console.log(Object.keys(sections));
  });
  return (
    <div className="grid grid-cols-6 gap-x-28 place-content-stretch h-full p-16">
      <div>
        {sectionsKeys.map((section, i) => {
          if (i < 4) {
            return (
              <>
                <h4 key={i}>{section}</h4>
                {sections[section as keyof typeof sections].length < 0 &&
                  sections[section as keyof typeof sections].map(
                    (subS, idx) => <h6 key={idx}>{subS}</h6>
                  )}
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TopFooter;
