import Layout from '../components/layout';
import json from '../assest/json/news.json';
import Feed from '../components/feed';

const Home = () => {
  const articles = json.articles;
  const source = articles.map((atcl) => atcl.source.name);
  return (
    <Layout>
      <Feed />
    </Layout>
  );
};

export default Home;
