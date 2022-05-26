import '../styles/globals.css'
import Head from "next/head";

import { HeadSetting } from '../components/pages/Head';
import { GA_ID, existsGaId } from '../libs/gtag';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <HeadSetting 
    title={'NAOs JOURNAL'}
    description={'NAOs JOURNAL'}
    url={'https://www.naosjournal.com/'}
    card={'/public/img/spain.jpeg'}
    keyword={'ブログ,デザイナー,デザイン,ポートフォリオ'}
     />

    <Head>
        {/* Google Analytics */}
        {existsGaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
              }}
            />
          </>
        )}
      </Head>

    <Component {...pageProps} />
    </>
  )
}

export default MyApp
