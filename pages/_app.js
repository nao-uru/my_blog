import '../styles/globals.css';
import React from 'react';
import { HeadSetting } from '../components/Templete/Head';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {

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
