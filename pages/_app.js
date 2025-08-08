import '../styles/globals.css';
import { HeadSetting } from '../components/Templete/Head';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {

  return (
    <>
    <HeadSetting 
    title={'NAO OSAWA'}
    description={'NAO OSAWA'}
    url={'https://www.naosjournal.com/'}
    card={'/public/img/Top/Portfolio.png'}
    keyword={'ブログ,デザイナー,デザイン,ポートフォリオ,プロダクトデザイン'}
     />

    <AnimatePresence>
    <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
    </>
  )
}

export default MyApp
