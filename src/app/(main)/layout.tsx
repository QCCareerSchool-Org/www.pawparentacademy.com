import BootstrapClient from '@/components/bootstrapClientX';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

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
