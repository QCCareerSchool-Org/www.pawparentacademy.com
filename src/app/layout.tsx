import type { Metadata } from "next";
import { Lato } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.scss';

const lato = Lato({
  weight: ['300','400','700','900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Paw Parent Academy",
  description: "Learn to groom your dog at home - Paw Parent Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={lato.className}>
        {children}
      </body>
    </html>
  );
}
