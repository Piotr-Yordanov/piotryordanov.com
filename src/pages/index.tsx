import type { NextPage } from 'next';
import { LuCandlestickChart } from 'react-icons/lu';
import { TbAlpha } from 'react-icons/tb';

import Divider from '@/components/Divider';
import LayoutPerPage from '@/components/LayoutPerPage';

const Home: NextPage = () => {
  return (
    <LayoutPerPage>
      <div className="container">
        <div className="min-h-[500px] py-24 text-center font-inter">
          <h1 className="text-3xl tracking-tight text-[#001C46] sm:text-8xl">
            <div className="inline">Cultivate</div>
            <TbAlpha className="inline text-4xl text-primary sm:text-8xl lg:ml-4" />
            in the <br />
            financial markets
            <LuCandlestickChart className="ml-4 inline text-3xl text-indigo-500 sm:text-7xl lg:ml-6" />
          </h1>
        </div>
        <Divider />
      </div>
      <div className="background-grid">
        <div className="container text-center">
          <div className="title font-bold">Hi, I'm Piotr </div>
          <div className="text font-bold">
            Harry Piotr of the financial markets. 🧙
          </div>
        </div>
      </div>
    </LayoutPerPage>
  );
};

export default Home;
