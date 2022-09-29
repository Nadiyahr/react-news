type Props = {
  imgUrl: string | null;
};

const Image: React.FC<Props> = ({ imgUrl }) => {
  return (
    <>
      <img
        className="block w-full h-full"
        onError={(e) => {
          e.currentTarget.src = require('../assest/img/image.png');
        }}
        src={imgUrl === null ? require('../assest/img/image.png') : imgUrl}
        alt=""
      />
    </>
  );
};

export default Image;
