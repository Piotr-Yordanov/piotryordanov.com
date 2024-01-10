import type { NextPage } from 'next';

import LayoutPerPage from '@/components/LayoutPerPage';

const SectionIntroTitle = ({ title, content }) => {
  return (
    <div className="my-10 text-left">
      <div className="prose mx-auto w-full text-base leading-loose tracking-wide ">
        <div className="mx-auto mb-10 w-96 text-center text-2xl ">
          Hi - Im Piotr Yordanov, a full stack developer, and a crypto trader.
        </div>
        <div className="" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <div className="mt-6 flex justify-center">
        <div className="inline-flex h-1 w-16 rounded-full bg-primary"></div>
      </div>
    </div>
  );
};
const About: NextPage = () => {
  return (
    <LayoutPerPage>
      <section className="">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-24">
          <SectionIntroTitle
            title="Piotr Yordanov"
            content="Born and Raised in Lebanon, of Russian origins, <i>Piotr Yordanov</i> started his entreprenrial journey right after finishing his engineering studies at the American University of Beirut.
<br/>We filled in the role of CTO and full stack developper at multiple ventures, first in Lebanon, then in San Fransisco, and finally remotely.
<br/>In 2013, he crowdfuned 8,000$ to fund his participation in Draper University, a 7 weeks entrepreneurship program in Silicon Valley, where he bought his first bitcoin.
<br/>In 2015, he moved to South East Asia, and embraced the life of a digital nomad, working remotely for multiple startups.
<br/>In 2017, with the crypto bull market in sight, he got into trading, first by doing crypto arbitrage, then by trading altcoins, and finally by trading bitcoin futures.
<br/>This introduction to trading got him excited about the idea of automating trading strategies. So, he dived into studying technicaly analysis, and the financial market structures.
<br/>In 2018, he made his first move into algorithmic trading, by building an advanced backtesting enginer.
<br/>In 2020, he started working with various prop trading firms.
<br/>In 2022, he moved to France and pursued an MBA in financial markets in Paris.
<br/>In 2023, he moved to Dubai where he put all his years of experience to research, backtest, and build fully automated tradings strategies."
          />
        </div>
      </section>
    </LayoutPerPage>
  );
};

export default About;
