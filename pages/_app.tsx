import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'antd/dist/antd.css';
import GlobalStyle, { fontFaceRules } from '../components/GlobalStyle.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: fontFaceRules,
          }}
        ></style>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
export default MyApp;
