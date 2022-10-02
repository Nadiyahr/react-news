import Layout from '../components/layout';
import Feed from '../components/topNews/feed';
import Main from '../components/main';
import VideoSection from '../components/videoSection.tsx';

const Home = () => {
  return (
    <Layout>
      <Feed />
      <Main />
      <VideoSection />
    </Layout>
  );
};

export default Home;
