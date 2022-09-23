import Layout from '../components/layout';
import Feed from '../components/feed';
import SidebarAllNews from '../components/sidebarAllNews';
import OurChoices from '../components/ourChiose';

const Home = () => {
  return (
    <Layout>
      <Feed />
      <main className="bg-neutral-200 flex p-0 lg:p-16">
        <SidebarAllNews />
        <OurChoices />
      </main>
    </Layout>
  );
};

export default Home;
