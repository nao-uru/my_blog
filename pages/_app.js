import '../styles/globals.css'
// import { HeadSetting } from '../components/pages/Head';


// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//     <HeadSetting 
//     title={'NAOs JOURNAL'}
//     description={'NAOs JOURNAL'}
//     url={'https://www.naosjournal.com/'}
//     card={'/public/img/spain.jpeg'}
//     keyword={'ブログ,デザイナー,デザイン,ポートフォリオ'}
//      />

//     <Component {...pageProps} />
//     </>
//   )
// }

// export default MyApp



import { useRouter } from "next/router";
import React, { useEffect } from 'react'

import { existsGaId, pageview } from '../libs/gtag'
import GoogleAnalytics from '../components/pages/GoogleAnalytics'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    if (!existsGaId) {
      return
    }

    const handleRouteChange = (path) => {
      pageview(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <GoogleAnalytics />

      <Component {...pageProps} />
    </>
  )
}

export default App
