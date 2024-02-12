import CustomLink from '@/components/CustomLink';
import { text } from '@/components/flow/nodes';

export default function Engineer() {
  return (
    <div className="p-6 pt-4">
      <div className="mb-2">
        Ever since I was a kid, I had a passion for reading and writing. In
        2015, I started writing heavily, and I soon wanted to share this passion
        with the rest of the world.
      </div>
      <CustomLink
        href="https://www.piotryordanov.com/articles"
        className={`${text.writer}`}
      >
        Find out more
      </CustomLink>
    </div>
  );
}
