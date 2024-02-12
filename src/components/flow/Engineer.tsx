import CustomLink from '@/components/CustomLink';
import { text } from '@/components/flow/nodes';

export default function Engineer() {
  return (
    <div className="p-6 pt-4">
      <div className="mb-2">
        I am a Senior Front-End developer, with over 10 years of experience
        building tons of web apps from scratch. My journey started with
        backbone.js, then I migrated to Angular 1, and eventually I adopted
        React.js in which I am quite proficient and at ease.
      </div>
      <CustomLink
        href="https://piotryordanov.com/developer"
        className={`${text.engineer}`}
      >
        Find out more
      </CustomLink>
    </div>
  );
}
