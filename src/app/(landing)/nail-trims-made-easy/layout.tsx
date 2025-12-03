import type { ReactNode } from 'react';
import Footer from '@/components/Footer';
import BootstrapClient from '@/components/BootstrapClient';
import SimpleLogoNavbar from './SimpleLogoNavbar';

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
