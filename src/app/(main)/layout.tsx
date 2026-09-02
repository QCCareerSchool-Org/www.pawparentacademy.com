import { cookies } from 'next/headers';

import { SiteBanner } from './siteBanner';
import type { LayoutComponent } from '../../serverComponent';
import { BootstrapClient } from '@/components/bootstrapClient';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import '../main.scss';
import { isUserValues } from '@/domain/userValues';
import { getServerData } from '@/lib/getServerData';
import { decodeJwt } from '@/lib/jwt';
import { LiveChat } from '@/scripts/liveChat';

const MainLayout: LayoutComponent = async ({ children }) => {
  const jwt = (await cookies()).get('user')?.value;
  const result = jwt ? await decodeJwt(jwt) : undefined;
  const raw = result?.success ? result.value : undefined;
  const userValues = raw && isUserValues(raw) ? raw : undefined;

  const { countryCode } = await getServerData();

  return (
    <>
      <SiteBanner countryCode={countryCode} />
      <Navbar />
      <main>{children}</main>
      <Footer />
      {process.env.LIVECHAT_LICENSE && <LiveChat group={process.env.LIVECHAT_GROUP_ID} license={process.env.LIVECHAT_LICENSE} userValues={userValues} />}
      <BootstrapClient />
    </>
  );
};

export default MainLayout;
