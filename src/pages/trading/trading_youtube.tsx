import CustomLink from '@/components/CustomLink';
import SimpleDivider from '@/components/SimpleDivider';

const YoutubeChannel = () => {
  return (
    <div className="container" id="youtube">
      <div className="title text-center">Live Trading and Market Analysis</div>
      <div className="text mb-20 text-center">
        I have recorded myself trading and analyzing the markets, when I still
        traded manually. Feel free to watch and enjoy. No shame in making fun of
        my Yolo'ing in front of a camera!
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded border-2 bg-white p-4">
          <div className="pb-4">
            <div className="text mb-4 text-center">Live Scalping</div>
            <div className="mb-4 text-center text-sm">
              Manual trading is hard.
              <CustomLink
                href="/articles/manual-trading-is-hard"
                className="mx-1 text-primary"
              >
                It's very hard.
              </CustomLink>
              It takes, mindfulness, practice, discipline and patience. But,
              that is how I started.
            </div>
          </div>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/videoseries?si=aD8cnLrfOttJL03S&amp;list=PLtQtaQymz_IPsN-FRkQMjhug7ZynYzizT"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="rounded border-2 bg-white p-4">
          <div className="pb-4">
            <div className="text mb-4 text-center">
              Series on Bitcoin Trading
            </div>
            <div className="mb-4 text-center text-sm">
              Let's analyze the price of bitcoin without actually placing any
              trades. This helps working on one's technical analysis skills, as
              well as practicing reading the markets.
            </div>
          </div>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/videoseries?si=oKj1Et88Hs4BLIBH&amp;list=PLtQtaQymz_IP-H8N6V4ax7qHDdgu_RuJh"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <SimpleDivider />
    </div>
  );
};

export default YoutubeChannel;
