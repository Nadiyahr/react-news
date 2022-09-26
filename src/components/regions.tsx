import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import ColumnArticles from './columnArticles';
import ColumnRgions from './columsRegions';

const Regions = () => {
  const { topNewsData } = useContext(GlobalContext);

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
      <div className="grid grid-cols-3 gap-4 place-content-stretch">
        <ColumnRgions title="Київ" data={topNewsData} />
        <ColumnRgions title="Одеса" data={topNewsData} />
        <ColumnRgions title="Харків" data={topNewsData} />
      </div>
    </section>
  );
};

export default Regions;
