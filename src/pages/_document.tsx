import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

function MyDocument() {
  return (
    <Html className="scroll-smooth ">
      <Head />
      <body className="overflow-x-hidden bg-white text-black antialiased transition-colors dark:bg-gray-900 dark:text-white">
        <Main />
        <NextScript />
        <Script
          src="https://s3.tradingview.com/tv.js"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}

export default MyDocument;
