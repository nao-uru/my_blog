import '../styles/globals.css'
import { HeadSetting } from '../components/pages/Head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <HeadSetting 
    title={'タイトル記入'}
    description={'アプリの説明'}
    url={'https://www.naosjournal.com/'}
     />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
