import { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import ColumnArticles from '../columnArticles';
import ColumnRgions from './columsRegions';

const Regions = () => {
  const { kharkivNews, kyivNews, odessaNews, isDesktopOrLaptop, isTablet } =
    useContext(GlobalContext);

  return (
    <section className=" mt-12">
      <div className="flex justify-between">
        <h3 className="text-3xl font-bold pb-6 text-neutral-700">Регіони</h3>
        <a
          href="/"
          className="flex gap-x-3 items-center mb-2 text-orange-400 text-sm"
        >
          Всі новини розділу
        </a>
      </div>
      {isDesktopOrLaptop && (
        <div className="grid grid-cols-3 gap-4 place-content-stretch h-screen">
          <ColumnRgions title="Київ" data={kyivNews} />
          <ColumnRgions title="Одеса" data={odessaNews} />
          <ColumnRgions title="Харків" data={kharkivNews} />
        </div>
      )}
      {isTablet && (
        <div className="px-2 py-2 overflow-hiden no-sctollbar w-screen">
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
