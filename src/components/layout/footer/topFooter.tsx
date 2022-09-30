import { useContext, useEffect } from 'react';
import { about, sections } from '../../../assest/vars';
import { GlobalContext } from '../../../context/GlobalContext';
import UlMenu from '../ulMenu';
import Column from './column';

const TopFooter = () => {
  const { isMobile, isNotMobile } = useContext(GlobalContext);
  const sectionsKeys = Object.keys(sections);

  return isNotMobile ? (
    <div className="grid grid-cols-6 place-content-stretch h-full px-16 py-6">
      <Column keysSec={sectionsKeys} options={sections} range={[0, 3]} />
      <Column keysSec={sectionsKeys} options={sections} range={[4, 5]} />
      <Column keysSec={sectionsKeys} options={sections} range={[6, 7]} />
      <Column keysSec={sectionsKeys} options={sections} range={[8, 9]} />
      <Column keysSec={sectionsKeys} options={sections} range={[10, 11]} />
      <Column keysSec={about} />
    </div>
  ) : (
    <>
      <UlMenu />
      {/* <div className="flex-row justify-center"> */}
      <Column keysSec={about} flex={true} />
      {/* </div> */}
    </>
  );
};

export default TopFooter;
