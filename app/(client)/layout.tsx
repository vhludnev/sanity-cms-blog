import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'
import { Provider } from '../utils/Provider'
import { firaCode } from '../utils/fonts'

export const metadata: Metadata = {
  metadataBase: new URL('https://slava-cms-blog.vercel.app/'),
  // title: "DevBlog - A blog for developers",
  title: {
    default: 'DevBlog - A blog for developers',
    template: '%s | DevBlog - A blog for developers',
  },
  description: 'A blog for developers by developers!',
  openGraph: {
    title: 'DevBlog - A blog for developers',
    description: 'A blog for developers by developers!',
    type: 'website',
    locale: 'en_US',
    url: 'https://slava-cms-blog.vercel.app/',
    siteName: 'DevBlog',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${firaCode.className} h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-purple-500`}
      >
        <Provider>
          <Navbar />
          <main className='h-full mx-auto max-w-5xl px-6'>{children}</main>
        </Provider>
      </body>
    </html>
  )
}
