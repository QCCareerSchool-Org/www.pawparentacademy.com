import type { LayoutComponent } from '../../serverComponent';
import { Header } from './_components/header';
import { BootstrapClient } from '@/components/bootstrapClient';
import { Footer } from '@/components/footer';
import '../main.scss';

const LandingLayout: LayoutComponent = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
    <BootstrapClient />
  </>
);

export default LandingLayout;
