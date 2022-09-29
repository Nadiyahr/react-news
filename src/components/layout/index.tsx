import Footer from './footer';
import Header from './header';

type Layout = {
  children: React.ReactNode;
};

const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <div className="text-slate-500 text-medium text-base sans">
      <Header />
      <div className="relative">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
