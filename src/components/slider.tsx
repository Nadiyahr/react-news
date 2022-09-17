import {
  GiTank,
  GiMissileLauncher,
  GiHelicopter,
  GiJetFighter,
  GiFrankensteinCreature,
  GiBattleTank
} from 'react-icons/gi';

const Slider = () => {
  return (
    <div className="px-8 py-2 flex mb-2 bg-blue-night">
      <div className="text-white h-min bg-blue-night w-60 sticky top-0 left-0">
        131&nbsp;день&nbsp;війни:
      </div>
      <div className="flex relative bg-gradient-to-r from-blue-night gap-x-10 overflow-x-hidden">
        <div className="flex text-white gap-x-10 animate-scroll-text whitespace-nowrap">
          <span className="flex gap-x-2">
            <span className="pt-1">
              <GiFrankensteinCreature />
            </span>
            особовий склад <span className="text-orange-400">~36 200</span>
          </span>
          <span className="flex gap-x-2">
            <span className="pt-1">
              <GiJetFighter />
            </span>
            літаки <span className="text-orange-400">220</span>
          </span>
          <span className="flex gap-x-2">
            <span className="pt-1">
              <GiTank />
            </span>
            танки
            <span className="text-orange-400">1589</span>
          </span>
          <span className="flex gap-x-2">
            <span className="pt-1">
              <GiMissileLauncher />
            </span>
            артсистеми <span className="text-orange-400">4578</span>
          </span>
          <span className="flex gap-x-2">
            РСЗВ <span className="text-orange-400">246</span>
          </span>
          <span className="flex gap-x-2">
            <span className="pt-1">
              <GiHelicopter />
            </span>
            гелікоптери <span className="text-orange-400">190</span>
          </span>
          <span className="flex gap-x-2">
            ББМ <span className="text-orange-400">4578</span>
          </span>
        </div>
        <div className="flex text-white gap-x-10 animate-scroll-text2 whitespace-nowrap">
          <span className="flex gap-x-2">
            <span className="pt-1">
              <GiFrankensteinCreature />
            </span>
            особовий склад <span className="text-orange-400">~36 200</span>
          </span>
          <span className="flex gap-x-2">
            <span className="pt-1">
              <GiJetFighter />
            </span>
            літаки <span className="text-orange-400">220</span>
          </span>
          <span className="flex gap-x-2">
            <span className="pt-1">
              <GiTank />
            </span>
            танки <span className="text-orange-400">1589</span>
          </span>
          <span className="flex gap-x-2">
            <span className="pt-1">
              <GiMissileLauncher />
            </span>
            артсистеми <span className="text-orange-400">4578</span>
          </span>
          <span className="flex gap-x-2">
            РСЗВ <span className="text-orange-400">246</span>
          </span>
          <span className="flex gap-x-2">
            <span className="pt-1">
              <GiHelicopter />
            </span>
            гелікоптери <span className="text-orange-400">190</span>
          </span>
          <span className="flex gap-x-2">
            ББМ <span className="text-orange-400">4578</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
