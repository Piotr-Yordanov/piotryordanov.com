import { useTranslation } from 'next-i18next';

import CommandPaletteToggle from '@/components/CommandPaletteToggle';
import CustomLink from '@/components/CustomLink';
import MobileNav from '@/components/MobileNav';
import SectionContainer from '@/components/SectionContainer';
import ThemeSwitch from '@/components/ThemeSwitch';
import { headerConfigs } from '@/configs/headerConfigs';

export default function Header({ type }) {
  const { t } = useTranslation(['common']);

  return (
    <header className="sticky top-0 z-10 border-b border-slate-900/10 bg-white py-2 font-mono backdrop-opacity-10 transition-colors dark:border-slate-50/[0.06] dark:bg-gray-900/60">
      <div className="container py-0">
        <div className="flex items-baseline justify-between">
          <div>
            <CustomLink href="/" aria-label={headerConfigs.title}>
              <div className="flex items-center justify-between">
                <div className="text-xl font-semibold ">
                  {headerConfigs.title}
                  <div className="cursorBlink inline">|</div>
                </div>
              </div>
            </CustomLink>
          </div>

          <div className="flex items-center leading-5 sm:gap-1">
            <div className="hidden items-center pb-1 text-sm leading-5 sm:flex sm:gap-1">
              {headerConfigs.navLinks.map((link) => (
                <CustomLink
                  href={link.href}
                  key={link.title}
                  className="block px-4 uppercase tracking-widest text-gray-900 transition-colors hover:text-primary"
                >
                  {link.title}
                </CustomLink>
              ))}
              <CommandPaletteToggle />
            </div>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
