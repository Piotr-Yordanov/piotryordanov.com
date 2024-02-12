import CustomLink from '@/components/CustomLink';
import { text } from '@/components/flow/nodes';

export default function Engineer() {
  return (
    <div className="p-6 pt-4">
      <div className="mb-2">
        My trading journey started when I rode the BTC bull run in 2017, and
        then the downhill of worry in the 2018 crypto bear market. I explored
        algo trading, read books on all sorts of techniques and strategies, and
        took courses online. Today, I let my trading bots manage risk on my
        behalf in the markets!
      </div>
      <CustomLink href="https://google.com" className={`${text.quant}`}>
        Find out more
      </CustomLink>
    </div>
  );
}
