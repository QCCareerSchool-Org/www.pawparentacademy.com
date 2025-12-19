import type { ReactNode } from 'react';

import SimpleLogoNavbar from './SimpleLogoNavbar';
import BootstrapClient from '@/components/BootstrapClient';
import Footer from '@/components/Footer';

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
