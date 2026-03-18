import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

import styles from './layout.module.scss';
import { LayoutClient } from './layoutClient';
import type { LayoutComponent } from './serverComponent';
import { isUserValues } from '@/domain/userValues';
import { getServerData } from '@/lib/getServerData';
import { decodeJwt } from '@/lib/jwt';
import { Provider } from '@/providers';
import { Bing } from '@/scripts/bing';
import { Brevo } from '@/scripts/brevo';
import { Facebook } from '@/scripts/facebook';
import { GoogleAnalytics } from '@/scripts/googleAnalytics';
import { OptInMonster } from '@/scripts/optInMonster';
import { Tiktok } from '@/scripts/tiktok';
import './global.css';

const lato = Lato({
  weight: [ '300', '400', '700', '900' ],
  subsets: [ 'latin' ],
  display: 'swap',
  variable: '--qc-font-lato',
});

export const metadata: Metadata = {
  title: {
    template: '%s - Paw Parent Academy',
    default: 'Paw Parent Academy',
  },
  description: 'Learn to groom your dog at home',
  icons: { icon: '/favicon.ico' },
};

const RootLayout: LayoutComponent = async ({ children }) => {
  const { clientIp } = await getServerData();
  const jwt = (await cookies()).get('user')?.value;
  const result = jwt ? await decodeJwt(jwt) : undefined;
  const raw = result?.success ? result.value : undefined;
  const userValues = raw && isUserValues(raw) ? raw : undefined;

  return (
    <html lang="en" className={lato.variable}>
      <head>
        {process.env.GOOGLE_ANALYTICS_ID && <GoogleAnalytics id={process.env.GOOGLE_ANALYTICS_ID} adsId={process.env.GOOGLE_ADS_ID} userValues={userValues} />}
        {process.env.BREVO_CLIENT_KEY && <Brevo clientKey={process.env.BREVO_CLIENT_KEY} userValues={userValues} />}
        {process.env.NEXT_PUBLIC_FACEBOOK_ID && <Facebook id={process.env.NEXT_PUBLIC_FACEBOOK_ID} userValues={userValues} />}
        {process.env.TIKTOK_ID && <Tiktok id={process.env.TIKTOK_ID} />}
        {process.env.BING_ID && <Bing id={process.env.BING_ID} userValues={userValues} />}
      </head>
      <body>
        <Provider userValues={userValues} clientIp={clientIp}>
          {children}
        </Provider>
        <OptInMonster />
        <Suspense><LayoutClient /></Suspense>
        <ToastContainer pauseOnFocusLoss pauseOnHover position="top-center" className={styles.toastContainer} />
      </body>
    </html>
  );
};

export default RootLayout;
