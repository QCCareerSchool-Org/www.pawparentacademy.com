import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BootstrapClient from '@/components/BootstrapClient';

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