import CustomLink from '@/components/CustomLink';
import { text } from '@/components/flow/nodes';

export default function Pianist() {
  return (
    <div className="p-6 pt-4">
      <div className="mb-2">
        My grand mother taught me the piano at the age of 3. I have a perfect
        pitch. Combined with over a decade of practice and theory classes, it
        makes me fluent on the keyboard. There is a certain pleasure that comes
        from just playing.
      </div>
      <CustomLink
        href="https://www.piotryordanov.com/music"
        className={`${text.pianist}`}
      >
        Find out more
      </CustomLink>
    </div>
  );
}
