import Layout from '../components/layout';
import Feed from '../components/topNews/feed';
import Main from '../components/main';

const Home = () => {
  return (
    <Layout>
      <Feed />
      <Main />
    </Layout>
  );
};

export default Home;
