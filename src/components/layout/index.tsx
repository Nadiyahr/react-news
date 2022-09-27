import NavBar from './navbar';
import NavSections from './navsections';
import Slider from '../topNews/slider';

type Layout = {
  children: React.ReactNode;
};

const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <div className="text-slate-500 text-medium text-base sans">
      <header>
        <NavBar />
        <NavSections />
        <Slider />
      </header>
      <div className="relative">{children}</div>
    </div>
  );
};

export default Layout;
