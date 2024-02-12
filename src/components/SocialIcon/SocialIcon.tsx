import clsx from 'clsx';
import { AiOutlineInstagram } from 'react-icons/ai';
import { CiMail } from 'react-icons/ci';
import { FaL, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FiFacebook, FiYoutube as Youtube } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';

// Icons taken from: https://simpleicons.org/

type SVGComponent = React.FC<React.SVGProps<SVGSVGElement>>;

const components: { [key: string]: SVGComponent } = {
  mail: CiMail as SVGComponent,
  github: VscGithubAlt as SVGComponent,
  facebook: FiFacebook as SVGComponent,
  linkedin: FaLinkedinIn as SVGComponent,
  twitter: FaXTwitter as SVGComponent,
  instagram: AiOutlineInstagram as SVGComponent,
  youtube: Youtube as SVGComponent,
};

type Props = {
  kind: 'mail' | 'github' | 'linkedin' | 'twitter' | 'instagram' | 'youtube';
  href: string;
};

const SocialIcon = ({ kind, href }: Props) => {
  if (
    !href ||
    (kind === 'mail' &&
      !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
  )
    return null;

  const SocialSvg = components[kind];

  return (
    <a
      className="text-sm text-gray-500 transition-colors hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={clsx(
          'size-[20px] text-gray-700 transition-colors hover:text-primary dark:text-gray-200'
        )}
      />
    </a>
  );
};

export default SocialIcon;
