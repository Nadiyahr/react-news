import { LoadButton } from '../react-app-env';
import ColumnArticles from './columnArticles';
import OurChoices from './ourChiose';

const Main = () => {
  const buttons = ['Всі', 'Новини', 'Статті'];
  const loadMore: LoadButton = {
    type: 'circle',
    name: 'Більше'
  };

  return (
    <main className="bg-neutral-200 flex p-0 lg:p-16">
      <ColumnArticles
        buttons={buttons}
        title="Всі новини"
        span="Архів"
        range={[0, 9]}
        loadButton={loadMore}
      />
      <OurChoices />
    </main>
  );
};

export default Main;
