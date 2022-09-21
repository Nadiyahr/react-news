import Layout from '../components/layout';
import Feed from '../components/feed';
import SidebarAllNews from '../components/sidebarAllNews';

const Home = () => {
  return (
    <Layout>
      <Feed />
      <main className="bg-neutral-200 flex p-16">
        <SidebarAllNews />
      </main>
    </Layout>
  );
};

export default Home;
