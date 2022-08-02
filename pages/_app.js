import '../styles/globals.css'
import { HeadSetting } from '../components/pages/Head';
import { AnimatePresence } from 'framer-motion';
import { GA_TRACKING_ID, pageview } from '../libs/gtag';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps, router }) {
  
  // Gtagの設定
  const route = useRouter();
  useEffect(() => {
    if (!GA_TRACKING_ID) return;

    const handleRouteChange = (url) => {
      pageview(url);
    };
    route.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      route.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [route.events]);

  return (
    <>
    <HeadSetting 
    title={'NAOs JOURNAL'}
    description={'NAOs JOURNAL'}
    url={'https://www.naosjournal.com/'}
    card={'/public/img/spain.jpeg'}
    keyword={'ブログ,デザイナー,デザイン,ポートフォリオ'}
     />

    <AnimatePresence>
    <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
    </>
  )
}

export default MyApp
