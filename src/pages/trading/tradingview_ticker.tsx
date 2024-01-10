import dynamic from 'next/dynamic';

const TickerTape = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.TickerTape),
  {
    ssr: false,
  }
);

const TVTicker = () => {
  return (
    <TickerTape
      symbols={[
        {
          proName: 'FOREXCOM:SPXUSD',
          title: 'S&P 500',
        },
        {
          proName: 'FOREXCOM:DJI',
          title: 'DJI',
        },
        {
          proName: 'FOREXCOM:NSXUSD',
          title: 'Nasdaq 100',
        },
        {
          proName: 'FOREXCOM:GRXEUR',
          title: 'Dax 40',
        },
        {
          proName: 'FX_IDC:EURUSD',
          title: 'EUR/USD',
        },
        {
          proName: 'FX_IDC:GBPUSD',
          title: 'GBP/USD',
        },
        {
          proName: 'FX_IDC:USDJPY',
          title: 'USD/JPY',
        },
        {
          proName: 'BITSTAMP:BTCUSD',
          title: 'BTC',
        },
        {
          proName: 'BITSTAMP:ETHUSD',
          title: 'ETH',
        },
        {
          proName: 'BITSTAMP:DOGEUSD',
          title: 'DOGE',
        },
      ]}
      displayMode="compact"
      colorTheme="dark"
    ></TickerTape>
  );
};

export default TVTicker;
