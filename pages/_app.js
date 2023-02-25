import '@/styles/globals.css'
import '@/styles/post.scss'

import { Open_Sans } from '@next/font/google'
const openSans = Open_Sans({ subsets: ['latin', 'latin-ext'] })

export default function App({ Component, pageProps }) {
  return (
    <div className={openSans.className}>
      <Component {...pageProps} />
    </div>
  )
}
