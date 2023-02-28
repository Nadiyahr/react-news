type Props = {
  imgUrl: string | null;
};

const Image: React.FC<Props> = ({ imgUrl }) => {
  return (
    <>
      <img
        className="block w-full h-full o"
        onError={(e) => {
          e.currentTarget.src = require('../assest/img/no-img.png');
        }}
        src={imgUrl || ''}
        alt="foto"
      />
    </>
  );
};

export default Image;
