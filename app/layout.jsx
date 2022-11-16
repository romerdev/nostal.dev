import { Inter } from "@next/font/google";
import "../styles/globals.css";
import Navigation from "../components/Navigation";
import MobileMenu from "../components/MobileMenu";

const inter = Inter();

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.className} scroll-smooth`}>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Romer Bormann | Nostal Development</title>
        <meta name='description' content='Portfolio Romer Bormann' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className='bg-primary'>
        <Navigation />
        <MobileMenu />

        {children}
      </body>
    </html>
  );
}
