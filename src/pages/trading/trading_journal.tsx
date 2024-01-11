import SimpleDivider from '@/components/SimpleDivider';

const TradingJournal = () => {
  return (
    <div className="background-grid topborder">
      <div className="container" id="journal">
        <div className="title text-center">Trading Journal</div>
        <div className="text mb-20 text-center">
          In the beginning of my trading career, I traded manually, and kept
          detailed logs of the different trades I took. I kept on doing that
          until I finally switched to automated trading. Find out the full
          journal
          <a
            href="https://scalpson.piotryordanov.com/"
            target="_blank"
            rel="noreferrer"
            className="ml-2 text-primary underline decoration-primary"
          >
            here.
          </a>
        </div>
        <div className="z-10 mx-auto rounded border-2 p-[1px] sm:w-4/5">
          <iframe
            src="https://scalpson.piotryordanov.com/"
            title="scalpson"
            width="100%"
            height="600"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
        <SimpleDivider />
      </div>
    </div>
  );
};

export default TradingJournal;
