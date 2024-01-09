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
    <header className="sticky top-0 z-10 border-b border-slate-900/10 py-3 font-mono backdrop-blur transition-colors dark:border-slate-50/[0.06] dark:bg-gray-900/60">
      <SectionContainer>
        <div className="flex items-baseline justify-between">
          <div>
            <CustomLink href="/" aria-label={headerConfigs.title}>
              <div className="flex items-center justify-between">
                <div className="h-6 text-2xl font-semibold sm:block">
                  {headerConfigs.title}
                  <div className="cursorBlink inline">|</div>
                </div>
              </div>
            </CustomLink>
          </div>

          <div className="flex items-center text-base leading-5 sm:gap-1">
            <div className="hidden items-center text-base leading-5 sm:flex sm:gap-1">
              {headerConfigs.navLinks.map((link) => (
                <CustomLink
                  href={link.href}
                  key={link.title}
                  className="block px-2 py-4 tracking-widest text-gray-900 transition-colors hover:text-red-500 "
                >
                  {link.title}
                </CustomLink>
              ))}
              <CommandPaletteToggle />
            </div>
            <MobileNav />
          </div>
        </div>
      </SectionContainer>
    </header>
  );
}
