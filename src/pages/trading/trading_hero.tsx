import { LuCandlestickChart } from 'react-icons/lu';
import { SiJupyter } from 'react-icons/si';
import { SlNotebook, SlSocialYoutube } from 'react-icons/sl';

import CustomLink from '@/components/CustomLink';
import Dots from '@/components/Dots/Dots';
import SimpleDivider from '@/components/SimpleDivider';

const sections = [
  {
    name: 'Trading View',
    icon: <LuCandlestickChart />,
    bg: 'bg-black',
    border: 'border-black',
    text: 'text-white',
    link: '#tradingview',
  },
  {
    name: 'QuantBT',
    icon: <SiJupyter />,
    bg: '100',
    border: 'border-indigo-500',
    text: 'text-indigo-500',
    link: '#quantbt',
  },
  {
    name: 'Trading Journal',
    icon: <SlNotebook />,
    bg: '',
    border: 'border-black',
    link: '#journal',
  },
  {
    name: 'Live Trading',
    icon: <SlSocialYoutube className="text-primary" />,
    bg: 'primary',
    border: 'border-primary',
    text: 'text-primary',
    link: '#youtube',
  },
];

const Hero = () => {
  return (
    <div className="relative mt-4 min-h-[600px] py-16 text-center sm:py-32">
      <div className="title">Quantitative Trading</div>
      <div className="text mx-auto mt-12 max-w-[500px]">
        I have over 10 years of experience shipping high quality code, and
        trading the financial markets.{' '}
      </div>
      <div className="mx-auto mt-20 flex flex-col justify-center gap-4 sm:flex-row">
        {sections.map((section) => (
          <CustomLink
            key={section.name}
            className={`mx-auto max-w-40 rounded border-2 ${section.text} ${section.border} ${section.bg} px-2`}
            href={section.link}
          >
            <div className="flex flex-row">
              <div className="mr-2 pt-1">{section.icon}</div>
              <div className="">{section.name}</div>
            </div>
          </CustomLink>
        ))}
      </div>
      <Dots direction="right" />
      <SimpleDivider />
    </div>
  );
};

export default Hero;
