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

        <Script
          src="https://piotryordanov.ck.page/Lv9kV2Ognin8lJ28yb6J-recommendations.js"
          async={true}
          strategy="beforeInteractive"
        />
        <Script
          src="https://f.convertkit.com/ckjs/ck.5.js"
          async={true}
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}

export default MyDocument;
