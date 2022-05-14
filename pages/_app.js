import '../styles/globals.css'
import { HeadSetting } from '../components/pages/Head'

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
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
