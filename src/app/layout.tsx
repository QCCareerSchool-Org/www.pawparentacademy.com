import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.scss';
import type { FC, PropsWithChildren } from 'react';

const lato = Lato({
  weight: [ '300', '400', '700', '900' ],
  subsets: [ 'latin' ],
  display: 'swap',
  variable: '--qc-font-lato',
});

export const metadata: Metadata = {
  title: {
    template: '%s - Paw Parent Academy',
    absolute: 'Paw Parent Academy',
  },
  description: 'Learn to groom your dog at home - Paw Parent Academy',
  icons: {
    icon: '/favicon.ico',
  },
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className={lato.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
