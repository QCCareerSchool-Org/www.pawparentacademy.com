import BootstrapClient from '@/components/BootstrapClient';
import Footer from '@/components/footerX';
import Navbar from '@/components/navbarX';

export const metadata = {
  title: 'Paw Parent Academy',
  description: 'Learn to groom your dog at home',
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BootstrapClient />
    </>
  );
}
