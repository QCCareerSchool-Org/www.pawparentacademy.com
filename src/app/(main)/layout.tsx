import BootstrapClient from '@/components/bootstrapClientX';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { BrevoConversations } from '@/scripts/brevoConversations';

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
      {process.env.BREVO_CONVERSATIONS_ID && process.env.BREVO_GROUP_ID && <BrevoConversations conversationsId={process.env.BREVO_CONVERSATIONS_ID} groupId={process.env.BREVO_GROUP_ID} />}
      <BootstrapClient />
    </>
  );
}
