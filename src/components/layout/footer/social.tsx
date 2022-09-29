import SocialBtns from '../../buttons/SocialBtns';

const Social = () => {
  return (
    <div className="px-16 pb-8 border border-x-0 border-t-0 border-blue-night/50">
      <h3 className="text-2xl font-semibold leading-8 pb-8">
        Новини у зручному форматі
      </h3>
      <SocialBtns isColor={true} classN="flex gap-16" />
    </div>
  );
};

export default Social;
