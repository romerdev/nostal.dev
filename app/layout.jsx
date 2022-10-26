'use client';

import { Inter } from '@next/font/google';
import '../styles/globals.css'
import { usePathname } from 'next/navigation';
import Navigation from '../components/Navigation';
import MobileMenu from '../components/MobileMenu';

const inter = Inter();

export default function RootLayout({ children }) {
  let pageClass = '';
  
  function createPageClass() {
    pageClass = usePathname() === '/' ? 'home' : usePathname().replace('/', '');
  }

  createPageClass();

  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta charSet='UTF-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio</title>
        <meta name="description" content="Portfolio Romer Bormann" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${pageClass} bg-primary`}>
        <Navigation />
        <MobileMenu />

        {children}
      </body>
    </html>
  )
}