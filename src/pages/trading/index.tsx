import type { NextPage } from 'next';

import Hero from './trading_hero';
import TradingJournal from './trading_journal';
import QBT from './trading_qbt';
import YoutubeChannel from './trading_youtube';
import TradingView from './tradingview';
import TVTicker from './tradingview_ticker';

const Trading: NextPage = () => {
  return (
    <div className="relative">
      <Hero />
      <QBT />
      <TradingView />
      <TradingJournal />
      <YoutubeChannel />

      <div className="sticky bottom-[-30px] sm:mx-[-600px]">
        <TVTicker />
      </div>
    </div>
  );
};

export default Trading;
