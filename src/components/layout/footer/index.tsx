import BottomFooter from './BottomFooter';
import Social from './social';
import TopFooter from './topFooter';

const Footer = () => {
  return (
    <footer className="bg-neutral-200 border border-zinc-400">
      <TopFooter />
      <Social />
      <BottomFooter />
    </footer>
  );
};

export default Footer;
