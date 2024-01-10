import { BsGraphUp } from 'react-icons/bs';
import { FaDocker } from 'react-icons/fa6';
import { GiToolbox } from 'react-icons/gi';

import {
  SectionCard,
  SectionCardContent,
  SectionCardIcon,
} from '@/components/SectionCard/sectionCard';
import SimpleDivider from '@/components/SimpleDivider';

const QBT = () => {
  return (
    <div className="background-grid ">
      <div className="container" id="quantbt">
        <div className="py-4">
          <div className="title text-center">QuantBT</div>
          <div className="text mb-10">
            QBT is a backtesting library written in python that uses numba to
            achieve fast execution. It is built with traders in mind, and
            focuses on providing simple API to go from backtests to live
            trading. Find out more
            <a
              href="https://quantbt.com"
              target="_blank"
              rel="noreferrer"
              className="ml-2 text-primary underline decoration-primary"
            >
              here.
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <SectionCard>
            <SectionCardIcon
              bg="bg-gray-200"
              text="text-red-500"
              icon={<FaDocker className="h-10 w-10 p-2" />}
            />
            <SectionCardContent
              title="Live Trading"
              content="Strategies written in QBT can be automatically deployed to MT5, crypto, and many more."
            />
          </SectionCard>
          <SectionCard>
            <SectionCardIcon
              bg="bg-green-100"
              text="text-green-500"
              icon={<GiToolbox className="h-10 w-10 p-2" />}
            />
            <SectionCardContent
              title="Powerful Methods"
              content="Move stop to BE, add Trailing SL, add SL and TP, add trade expiry. QBT is loaded with many functionalities traders are familiar with."
            />
          </SectionCard>
          <SectionCard>
            <SectionCardIcon
              bg="bg-indigo-100"
              text="text-indigo-500"
              icon={<BsGraphUp className="h-10 w-10 p-2" />}
            />
            <SectionCardContent
              title="Robust Charting"
              content="Instead of using plotly or other unreliable visualization libraries, QBT offers it's own web based candle visualization."
            />
          </SectionCard>
        </div>
        <SimpleDivider />
      </div>
    </div>
  );
};

export default QBT;
