import OurChoices from './ourChoice';
import Regions from './regions';

const LeftSideNews = () => {
  return (
    <section className="lg:w-3/4 w-full h-fit border px-1 md:px-6 pb-6 blue-main">
      <OurChoices />
      <Regions />
    </section>
  );
};

export default LeftSideNews;
