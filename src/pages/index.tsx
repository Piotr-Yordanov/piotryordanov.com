import type { NextPage } from 'next';
import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi2';
import { LuCandlestickChart } from 'react-icons/lu';
import { TbAlpha } from 'react-icons/tb';

import ConvertkitSignupForm from '@/components/ConvertkitSignupForm';
import CustomLink from '@/components/CustomLink';
import LayoutPerPage from '@/components/LayoutPerPage';
import LayoutWrapper from '@/components/LayoutWrapper';

import Threeways from './home.threeways';

const Home: NextPage = () => {
  return (
    <LayoutWrapper>
      <LayoutPerPage>
        <div className="container">
          <div className="mb-20 mt-10 min-h-[150px] py-0 text-center font-inter lg:mt-0 lg:min-h-[300px]">
            <h1 className="text-5xl tracking-tight text-[#001C46] lg:text-8xl">
              <div className="inline">Cultivate</div>
              <TbAlpha className="inline text-4xl text-primary lg:ml-4 lg:text-8xl" />
              in the <br />
              financial markets
              <LuCandlestickChart className="ml-4 inline text-3xl text-indigo-500 lg:ml-6 lg:text-7xl" />
            </h1>
          </div>
          <div className="mb-20 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-1">
            <div className="pr-8 font-inter ">
              <div className="pb-4 text-2xl font-bold">Want to join us?</div>
              <div className="text-lg">
                Join Readers of The Quantrader weekly newsletter for tips,
                strategies, and resources to make money trading and investing in
                the financial markets.
              </div>
            </div>
            <div className="pt-8 lg:pt-0">
              <div className="flex flex-row">
                <div className="">
                  <HiArrowRight className="hidden h-32 w-32 pr-8 pt-4 text-indigo-500 lg:inline" />
                </div>
                <div className="">
                  <div className="mb-4 text-xl font-bold">Start here</div>
                  <ConvertkitSignupForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#001c46]">
          <div className="mx-auto max-w-2xl text-white">
            <div className="container text-center">
              <div className="mx-auto mb-4 max-w-[150px]">
                <Image
                  src="/profile-pic.png"
                  width={150}
                  height={150}
                  alt="profile picture"
                  className="rounded-full"
                />
              </div>
              <div className="title font-bold">Hi, I'm Piotr </div>
              <div className="text mb-4 font-bold">
                Harry Piotr of the financial markets. 🧙
              </div>
              <div className="">
                <div className="small my-12 text-cyan-300">
                  [An open letter to Traders and Investors]
                </div>
                <div className="text mb-24 leading-loose text-white">
                  Trading is hard, especially manual trading.
                  <br /> It requires a lot of time, patience, and discipline.
                  <br /> There is nothing more painful than getting an sms from
                  your broker who just margin called you!
                  <br />
                  <br /> I know that feeling. I experienced it enough times to
                  make me want to say: "Enough!".
                  <br /> So, I dedicated years of my life to convert my
                  knowledge as a programmer to apply it to the financial
                  markets.
                  <br />
                  <br />
                  <div className="text-cyan-300">
                    Join me in taking your trading experience to the next level.
                  </div>
                </div>
                <CustomLink
                  href="/about"
                  className="small my-4 rounded-full border-2 p-4 text-white no-underline"
                >
                  More about me
                </CustomLink>
              </div>
            </div>
          </div>
        </div>
        <Threeways />
      </LayoutPerPage>
    </LayoutWrapper>
  );
};

export default Home;
