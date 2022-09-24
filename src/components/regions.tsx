import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import ColumnArticles from './columnArticles';

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
        <ColumnArticles
          title="Київ"
          range={[0, 5]}
          loadButton={{ type: 'circle', name: 'Більше новин' }}
          data={topNewsData}
          icons={false}
          size={{ width: 'w-[290px]', height: 'h-[760px]' }}
        />
        <ColumnArticles
          title="Одеса"
          range={[5, 10]}
          loadButton={{ type: 'circle', name: 'Більше новин' }}
          data={topNewsData}
          icons={false}
          size={{ width: 'w-[290px]', height: 'h-[760px]' }}
        />
        <ColumnArticles
          title="Харків"
          range={[10, 15]}
          loadButton={{ type: 'circle', name: 'Більше новин' }}
          data={topNewsData}
          icons={false}
          size={{ width: 'w-[290px]', height: 'h-[760px]' }}
        />
      </div>
    </section>
  );
};

export default Regions;
