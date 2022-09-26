import { AiOutlineReload } from 'react-icons/ai';

type Props = {
  getMore: () => void;
  diffBorder?: string;
};

const SquarBtn: React.FC<Props> = ({ getMore, diffBorder = '' }) => {
  return (
    <button
      onClick={getMore}
      className={`border rounded flex justify-center gap-x-1 items-center py-1 px-4 w-full text-blue-night ${diffBorder}`}
    >
      <AiOutlineReload />
      Завантажити ще
    </button>
  );
};

export default SquarBtn;
