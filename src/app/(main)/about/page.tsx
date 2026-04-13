import type { Metadata } from 'next';

import { HeroSection } from './_components/heroSection';
import { TeamSection } from './_components/teamSection';
import { StatsSection } from '../../../components/statsSection';
import { CTASection } from '@/components/ctaSection';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Our Mission to Empower Paw Parents',
  description: 'Meet the grooming experts behind Paw Parent Academy and learn how our mission, team, and values help you confidently groom your dog at home.',
  alternates: { canonical: '/about' },
};

const AboutPage: PageComponent = () => (
  <>
    <HeroSection />
    <TeamSection />
    <StatsSection />
    <CTASection />
  </>
);

export default AboutPage;
