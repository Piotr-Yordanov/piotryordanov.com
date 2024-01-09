import type { NextPage } from 'next';
import { TbAlpha } from 'react-icons/tb';

import Divider from '@/components/Divider';
import LayoutPerPage from '@/components/LayoutPerPage';

const Home: NextPage<Props> = (props) => {
  return (
    <LayoutPerPage>
      <div className="py-16 sm:py-20 lg:py-48">
        <div className="text-center font-inter">
          <h1 className="text-3xl tracking-tight text-[#001C46] sm:text-8xl">
            <div className="inline">Find and cultivate</div>
            <TbAlpha className="inline inline text-4xl text-red-600 sm:text-8xl lg:ml-4" />
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-600"></p>
          Trading
        </div>
      </div>
      <Divider />
    </LayoutPerPage>
  );
};

export default Home;
