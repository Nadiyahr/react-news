import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import ColumnRgions from './columsRegions';

const Regions = () => {
  const {
    kharkivNews,
    kyivNews,
    odessaNews,
    isDesktopOrLaptop,
    isTablet,
    isMobile
  } = useContext(GlobalContext);

  return (
    <section className="mt-12 md:min-h-1/2" id="main">
      <div className="flex justify-between px-1 min-h-[10%]">
        <h3 className="text-3xl font-bold pb-6 text-neutral-700">Регіони</h3>
        <a
          href="/"
          className="flex gap-x-3 items-center mb-2 text-orange-400 text-sm"
        >
          Всі новини розділу
        </a>
      </div>
      {isDesktopOrLaptop && (
        <div className="grid grid-cols-3 gap-4 place-content-stretch">
          <ColumnRgions title="Київ" data={kyivNews} />
          <ColumnRgions title="Одеса" data={odessaNews} />
          <ColumnRgions title="Харків" data={kharkivNews} />
        </div>
      )}
      {(isMobile || isTablet) && (
        <div className="px-2 py-2 overflow-hiden no-sctollbar w-screen h-fit">
          <div className="flex overflow-x-auto no-sctollbar gap-x-4">
            <ColumnRgions title="Київ" data={kyivNews} />
            <ColumnRgions title="Одеса" data={odessaNews} />
            <ColumnRgions title="Харків" data={kharkivNews} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Regions;
