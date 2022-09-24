import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { LoadButton } from '../react-app-env';
import ColumnArticles from './columnArticles';
import OurChoices from './ourChiose';

const Main = () => {
  const { topNewsData } = useContext(GlobalContext);
  const buttons = ['Всі', 'Новини', 'Статті'];
  const loadMore: LoadButton = {
    type: 'square',
    name: 'Завантажити ще'
  };

  return (
    <main className="bg-neutral-200 lg:flex flex-row p-0 lg:p-16 w-screen lg:w-fill ">
      <ColumnArticles
        buttons={buttons}
        title="Всі новини"
        span="Архів"
        range={[0, 9]}
        loadButton={loadMore}
        data={topNewsData}
        icons={true}
        size={{ width: 'w-[300px]', height: 'h-[1506px]' }}
      />
      <OurChoices />
    </main>
  );
};

export default Main;
