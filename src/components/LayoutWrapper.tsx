import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SectionContainer from '@/components/SectionContainer';
import { Inter, Lato, Literata, Roboto_Mono } from '@next/font/google';

type Props = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-lato',
});

const literata = Literata({
  subsets: ['latin'],
  variable: '--font-literata',
});

const LayoutWrapper = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <div
        className={`${lato.variable} ${literata.variable} ${inter.variable} ${roboto_mono.variable}`}
      >
        <Header />

        <SectionContainer>
          <main className="mb-auto font-sans">{children}</main>
        </SectionContainer>
      </div>

      <Footer />
    </div>
  );
};

export default LayoutWrapper;
