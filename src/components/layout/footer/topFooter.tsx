import { useEffect } from 'react';
import { about, sections } from '../../../assest/vars';
import Column from './column';

const TopFooter = () => {
  const sectionsKeys = Object.keys(sections);

  return (
    <div className="grid grid-cols-6 place-content-stretch h-full p-16">
      <Column keysSec={sectionsKeys} options={sections} range={[0, 3]} />
      <Column keysSec={sectionsKeys} options={sections} range={[4, 5]} />
      <Column keysSec={sectionsKeys} options={sections} range={[6, 7]} />
      <Column keysSec={sectionsKeys} options={sections} range={[8, 9]} />
      <Column keysSec={sectionsKeys} options={sections} range={[10, 11]} />
      <Column keysSec={about} />
    </div>
  );
};

export default TopFooter;
