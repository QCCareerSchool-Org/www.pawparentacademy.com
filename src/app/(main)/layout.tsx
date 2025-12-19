import BootstrapClient from '@/components/BootstrapClient';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

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
