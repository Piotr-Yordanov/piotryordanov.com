import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SectionContainer from '@/components/SectionContainer';

type Props = {
  children: React.ReactNode;
};

const LayoutWrapper = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between bg-[#f2f5fa] ">
      <Header />

      <SectionContainer>
        <main className="mb-auto font-sans">{children}</main>
      </SectionContainer>

      <Footer />
    </div>
  );
};

export default LayoutWrapper;
