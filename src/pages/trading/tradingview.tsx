import SimpleDivider from '@/components/SimpleDivider';

const TVCharts = [
  {
    name: 'MA Breakout',
    description:
      'Change the body color of candles that go through a moving average which can be a sign of continuation or a reversal.',
    id: 'UiR3RlCZ',
  },
  {
    name: 'Morning Evening Star',
    description: 'A neat way to see morning and evening stars on chart',
    id: 'xhUGz6lY',
  },
  {
    name: 'ATR Distance',
    description:
      'Shows a static ATR distance from using the latest ATR, and drawing it up and down the price.',
    id: 'K0Wz13qn',
  },
  {
    name: 'BB, fractal, MA',
    description:
      "Get an all in one BB, MA and Fractal that you can customize to your heart's liking.",
    id: '2Wp64p6K',
  },
  {
    name: 'RSI histo for overgouth/undersold',
    description:
      'Your good old RSI, with a twist showing visual colors for when it goes undersold or overbought!',

    id: 'Sn2DHI62',
  },
  {
    name: 'ATR Sessions',
    description:
      'Given a Traditional index, shows the different sessions overlayed with ATR',
    id: '7Ggk7cEX',
  },
];

const TradingView = () => {
  return (
    <div className="container" id="tradingview">
      <div className="pb-20 text-center">
        <div className="title font-mono">
          <a href="#tradingview">Trading View Scripts</a>
        </div>
        <div className="text">
          I have published a series of free tradingview scripts that you can
          access to enhance your trading experience
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {TVCharts.map((chart) => {
          return (
            <div className="rounded border-2 bg-white p-4" key={chart.id}>
              <div className="min-h-[100px]">
                <div className="text-xl">{chart.name}</div>
                <div className="mb-4 mt-2 text-sm">{chart.description}</div>
              </div>
              <iframe
                title="published chart TradingView widget"
                lang="en"
                id={chart.id}
                src={`https://s.tradingview.com/embed/${chart.id}?method=script&amp;utm_source=&amp;utm_medium=widget&amp;utm_campaign=chart`}
                style={{
                  width: '100%',
                  height: 400,
                  margin: '0px !important',
                  padding: '0px !important',
                }}
              ></iframe>
            </div>
          );
        })}
      </div>
      <SimpleDivider />
    </div>
  );
};

export default TradingView;
