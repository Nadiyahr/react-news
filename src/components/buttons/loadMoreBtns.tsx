import { AiOutlineArrowRight, AiOutlineReload } from 'react-icons/ai';

type Props = {
  getMore: () => void;
  diffBorder?: string;
};

export const SquarBtn: React.FC<Props> = ({ getMore, diffBorder = '' }) => {
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

export const CircleBtn: React.FC<Props> = ({ getMore, diffBorder = '' }) => {
  return (
    <button
      onClick={getMore}
      className="flex w-full justify-start gap-x-8 items-center text-blue-night"
    >
      <span className="blue-main">Більше новин</span>
      <div className={`border rounded-full p-2 ${diffBorder}`}>
        <AiOutlineArrowRight />
      </div>
    </button>
  );
};
