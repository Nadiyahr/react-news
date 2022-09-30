import SocialBtns from '../../buttons/SocialBtns';

const Social = () => {
  return (
    <div className="px-2 md:px-16 pb-8 border border-x-0 border-t-0 border-blue-night/50 w-full">
      <h3 className=" text-xl md:text-2xl font-semibold tracking-tight leading-8 pb-8">
        Новини у зручному форматі
      </h3>
      <SocialBtns
        isColor={true}
        classN="grid grid-cols-2 gap-6 md:flex md:gap-16 items-center w-max"
      />
    </div>
  );
};

export default Social;
