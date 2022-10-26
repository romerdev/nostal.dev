import { Inter } from '@next/font/google';
import '../styles/globals.css'
import Navigation from '../components/Navigation';
import MobileMenu from '../components/MobileMenu';

const inter = Inter();

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio Romer Bormann" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className='bg-yellow-300'>
        <Navigation />
        <MobileMenu />

        {children}
      </body>
    </html>
  )
}
