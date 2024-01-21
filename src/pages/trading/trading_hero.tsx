import { LuCandlestickChart } from 'react-icons/lu';
import { SiJupyter } from 'react-icons/si';
import { SlNotebook, SlSocialYoutube } from 'react-icons/sl';

import CustomLink from '@/components/CustomLink';
import Hero from '@/components/Hero';

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

const TradingHero = () => {
  return (
    <Hero
      title="Quantitative Trading"
      subtitle="I have over 10 years of experience shipping high quality code, and trading the financial markets."
    >
      <div className="mx-auto mt-20 flex flex-col justify-center gap-4 sm:max-w-[600px] sm:flex-row">
        {sections.map((section) => (
          <CustomLink
            key={section.name}
            className={`mx-auto max-w-44 rounded border-2 ${section.text} ${section.border} ${section.bg} px-2`}
            href={section.link}
          >
            <div className="flex flex-row">
              <div className="mr-2 pt-1">{section.icon}</div>
              <div className="">{section.name}</div>
            </div>
          </CustomLink>
        ))}
      </div>
    </Hero>
  );
};

export default TradingHero;
