import Dots from '@/components/Dots/Dots';
import SimpleDivider from '@/components/SimpleDivider';

const Hero = ({ title, subtitle, children }) => {
  return (
    <div className="relative mt-4 min-h-[600px] py-16 text-center lg:py-32">
      <div className="title">{title}</div>
      <div className="text mx-auto mt-12 ">{subtitle}</div>
      {children}
      <Dots direction="right" />
      <SimpleDivider />
    </div>
  );
};

export default Hero;
