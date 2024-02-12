import '@/styles/globals.css';
import '@/styles/prism-dracula.css';
import '@/styles/prism-plus.css';
import 'nprogress/nprogress.css';
import '@/styles/nprogress-custom.scss';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import ScrollToTop from 'react-scroll-to-top';

import CommandPalette from '@/components/CommandPalette';
import LayoutWrapper from '@/components/LayoutWrapper';
import { siteConfigs } from '@/configs/siteConfigs';
import 'reactflow/dist/style.css';

import nextI18nConfig from '../../next-i18next.config';

NProgress.configure({ showSpinner: false });
import { IoIosArrowUp } from 'react-icons/io';

import {
  Inter,
  Lato,
  Literata,
  Roboto_Mono,
  Sacramento,
} from '@next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

const sacramento = Sacramento({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-sacramento',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-lato',
});

const literata = Literata({
  subsets: ['latin'],
  variable: '--font-literata',
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Integrate nprogress
  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`${sacramento.variable} ${lato.variable} ${literata.variable} ${inter.variable} ${roboto_mono.variable}`}
    >
      <ThemeProvider attribute="class" defaultTheme="light">
        <ScrollToTop
          smooth
          component={<IoIosArrowUp className="ml-2 h-6 w-6" />}
        />
        <CommandPalette>
          <DefaultSeo
            titleTemplate={`%s | ${siteConfigs.titleShort}`}
            defaultTitle={siteConfigs.title}
            description={siteConfigs.description}
            canonical={siteConfigs.fqdn}
            openGraph={{
              title: siteConfigs.title,
              description: siteConfigs.description,
              url: siteConfigs.fqdn,
              images: [
                {
                  url: siteConfigs.bannerUrl,
                },
              ],
              site_name: siteConfigs.title,
              type: 'website',
            }}
            twitter={{
              handle: siteConfigs.twitterID,
              site: siteConfigs.twitterID,
              cardType: 'summary_large_image',
            }}
            additionalMetaTags={[
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
            additionalLinkTags={[
              {
                rel: 'icon',
                href: siteConfigs.logoPath,
              },
              {
                rel: 'alternate',
                type: 'application/rss+xml',
                href: '/feed.xml',
              },
              {
                rel: 'alternate',
                type: 'application/atom+xml',
                href: '/atom.xml',
              },
            ]}
          />

          <Component {...pageProps} />
        </CommandPalette>
      </ThemeProvider>
    </div>
  );
}

// Explicitly pass nextI18nConfig to suppress i18next console warning
// `react-i18next:: You will need to pass in an i18next instance by using initReactI18next`
// Ref: https://github.com/i18next/next-i18next/issues/718#issuecomment-1190468800
export default appWithTranslation(MyApp, nextI18nConfig);
