import type { LayoutComponent } from '../serverComponent';
import { BootstrapClient } from '@/components/bootstrapClient';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { BrevoConversations } from '@/scripts/brevoConversations';
import '../main.scss';

const MainLayout: LayoutComponent = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
    {process.env.BREVO_CONVERSATIONS_ID && process.env.BREVO_GROUP_ID && <BrevoConversations conversationsId={process.env.BREVO_CONVERSATIONS_ID} groupId={process.env.BREVO_GROUP_ID} />}
    <BootstrapClient />
  </>
);

export default MainLayout;
