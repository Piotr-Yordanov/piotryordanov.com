import clsx from 'clsx';
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { CiMail } from 'react-icons/ci';
import { FaLinkedin } from 'react-icons/fa';
import { FaX, FaXTwitter } from 'react-icons/fa6';
import { FiFacebook, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import { VscGithubAlt } from 'react-icons/vsc';

// Icons taken from: https://simpleicons.org/

type SVGComponent = React.FC<React.SVGProps<SVGSVGElement>>;

const components: { [key: string]: SVGComponent } = {
  mail: CiMail as SVGComponent,
  github: VscGithubAlt as SVGComponent,
  facebook: FiFacebook as SVGComponent,
  linkedin: SlSocialLinkedin as SVGComponent,
  twitter: FaXTwitter as SVGComponent,
  instagram: AiOutlineInstagram as SVGComponent,
};

type Props = {
  kind: 'mail' | 'github' | 'facebook' | 'linkedin' | 'twitter';
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
          'h-[24px] w-[24px] fill-current text-gray-700 transition-colors dark:text-gray-200',
          kind === 'mail' &&
            'hover:text-primary-600 dark:hover:text-primary-400',
          kind === 'github' && 'hover:text-gray-500 dark:hover:text-gray-400',
          kind === 'instagram' && 'hover:text-gray-500',
          kind === 'linkedin' &&
            'h-[21px] w-[24px] hover:text-[#0e76a8] dark:hover:text-[#0e76a8]',
          kind === 'twitter' &&
            'hover:text-[#1DA1F2] dark:hover:text-[#1DA1F2]',
          kind === 'facebook' &&
            'hover:text-[#4267B2] dark:hover:text-[#4267B2]'
        )}
      />
    </a>
  );
};

export default SocialIcon;
