import type { ReactNode } from 'react';

import SimpleLogoNavbar from './SimpleLogoNavbar';
import BootstrapClient from '@/components/bootstrapClientX';
import Footer from '@/components/footer';

export default function NailTrimsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SimpleLogoNavbar />
      <main>{children}</main>
      <Footer />
      <BootstrapClient />
    </>
  );
}
