import NavBar from './navbar';
import NavSections from './navsections';
import Slider from './slider';

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
      <div>{children}</div>
    </div>
  );
};

export default Layout;
