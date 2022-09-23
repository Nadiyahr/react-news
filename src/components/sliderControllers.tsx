import { useContext } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { GlobalContext } from '../context/GlobalContext';

type Props = {
  length: number;
};

const SliderControlers: React.FC<Props> = ({ length }) => {
  const { index, dispatchIndex } = useContext(GlobalContext);

  const handlePrev = (idx: number) => {
    const lastEl = length - 1;

    return idx === 0
      ? dispatchIndex({ type: 'SET', payload: lastEl })
      : dispatchIndex({ type: 'PREV', payload: 1 });
  };

  const handleNext = (idx: number) => {
    return idx === length - 1
      ? dispatchIndex({ type: 'SET', payload: 0 })
      : dispatchIndex({ type: 'NEXT', payload: 1 });
  };

  return (
    <div className="absolute w-1/2 bottom-1/4 left-16 px-3 flex gap-x-8 items-center">
      <button
        className="w-8 h-8 border border-gray-100 text-gray-100 rounded-full p-1 flex justify-center items-center text-xl"
        onClick={() => handlePrev(index.index)}
      >
        <BiChevronLeft />
      </button>
      <div className="whitespace-pre text-lg font-medium text-gray-100">
        {index.index + 1} / {length}
      </div>
      <button
        className="w-8 h-8 border border-gray-100 text-gray-100 rounded-full p-1 flex justify-center items-center text-xl"
        onClick={() => handleNext(index.index)}
      >
        <BiChevronRight />
      </button>
    </div>
  );
};

export default SliderControlers;
