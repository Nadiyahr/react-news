import {
  GiTank,
  GiMissileLauncher,
  GiHelicopter,
  GiJetFighter,
  GiFrankensteinCreature
} from 'react-icons/gi';

const Slider = () => {
  return (
    <div className="px-6 md:px-4 lg:pl-16 py-1 flex bg-blue-night relative text-sm">
      <div className="flex absolute gap-x-10 overflow-x-auto no-sctollbar w-[98%] md:w-[88%]">
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
      <div className="text-white h-full bg-blue-night from-blue-night bg-gradient-to-r backdrop-blur-sm min-w-[90px] md:min-w-[190px] sticky top-0 md:right-[91%] pr-1 ">
        131&nbsp;день&nbsp;війни:
      </div>
    </div>
  );
};

export default Slider;
