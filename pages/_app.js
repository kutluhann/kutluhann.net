import '@/styles/globals.css'
import '@/styles/post.scss'
import { Analytics } from '@vercel/analytics/react';

import { Open_Sans } from '@next/font/google'
const openSans = Open_Sans({ subsets: ['latin', 'latin-ext'], display: 'swap' })

export default function App({ Component, pageProps }) {
  return (
    <div className={openSans.className + " flex flex-col min-h-screen"}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  )
}
