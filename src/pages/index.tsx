import type { NextPage } from 'next';
import { LuCandlestickChart } from 'react-icons/lu';
import { TbAlpha } from 'react-icons/tb';

import Divider from '@/components/Divider';
import LayoutPerPage from '@/components/LayoutPerPage';

const Home: NextPage = () => {
  return (
    <LayoutPerPage>
      <div className="py-16 sm:py-20 lg:py-48">
        <div className="text-center font-inter">
          <h1 className="text-3xl tracking-tight text-[#001C46] sm:text-8xl">
            <div className="inline">Cultivate</div>
            <TbAlpha className="inline text-4xl text-primary sm:text-8xl lg:ml-4" />
            in the <br />
            financial markets
            <LuCandlestickChart className="ml-4 inline text-3xl text-indigo-500 sm:text-7xl lg:ml-6" />
          </h1>
        </div>
      </div>
      <Divider />
    </LayoutPerPage>
  );
};

export default Home;
