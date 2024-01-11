import { FaArrowCircleRight } from 'react-icons/fa';

import CustomLink from '@/components/CustomLink';
import SocialIcon from '@/components/SocialIcon';
import { footerConfigs } from '@/configs/footerConfigs';

export default function Footer() {
  return (
    <footer>
      <div className="container flex w-full flex-col items-center justify-between p-4 sm:mt-16 sm:flex-row">
        <div className="hidden space-x-2 text-sm text-gray-500 transition-colors dark:text-gray-400 sm:flex sm:w-1/2">
          <CustomLink
            href="/about"
            className="flex cursor-pointer hover:text-primary"
          >
            <div className="">
              <FaArrowCircleRight className="mx-1 inline-block" />
              Learn more about {footerConfigs.credit}
            </div>
          </CustomLink>
        </div>
        <div className="my-4 flex justify-center space-x-4 text-sm text-gray-500 transition-colors dark:text-gray-400 sm:mb-3 sm:w-1/2">
          <CustomLink
            href="/about"
            className="flex cursor-pointer hover:text-primary"
          >
            <div>{`© ${new Date().getFullYear()} Piotr Yordanov`}</div>
          </CustomLink>
        </div>
        <div className="mb-3 flex w-1/2 justify-end space-x-4">
          <SocialIcon
            kind="mail"
            href={`mailto:${footerConfigs.socialLinks.email}`}
          />
          <SocialIcon kind="github" href={footerConfigs.socialLinks.github} />
          <SocialIcon kind="youtube" href={footerConfigs.socialLinks.youtube} />
          <SocialIcon
            kind="instagram"
            href={footerConfigs.socialLinks.instagram}
          />
          <SocialIcon kind="twitter" href={footerConfigs.socialLinks.twitter} />
          <SocialIcon
            kind="linkedin"
            href={footerConfigs.socialLinks.linkedin}
          />
        </div>
      </div>
    </footer>
  );
}
