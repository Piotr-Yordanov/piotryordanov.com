import Image from 'next/image';

const QBT = () => {
  return (
    <div className="">
      <div className="py-4">
        <div className="title">QuantBT</div>
        <div className="text">
          QBT is a backtesting library written in python that uses numba to
          achieve fast execution. It is built with traders in mind, and focuses
          on providing simple API to go from backtests to live trading.
        </div>
      </div>
      <div className="relative h-[300px] w-[300px]">
        <Image src="/qbt.png" fill={true} alt="Picture of the author" />
      </div>
    </div>
  );
};

export default QBT;
