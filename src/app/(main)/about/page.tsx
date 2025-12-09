import type { Metadata } from 'next';
import AboutHero from './AboutHeroSection';
import MissionSection from './MissionSection';
import StatsSection from './StatsSection';
import TeamSection from './TeamSection';
import CTASection from '@/components/CTASection'; 

export const metadata: Metadata = {
  title: 'About Paw Parent Academy | Our Mission to Empower Paw Parents',
  description:
    'Meet the grooming experts behind Paw Parent Academy and learn how our mission, team, and values help you confidently groom your dog at home.',
  alternates: {
    canonical: 'https://www.pawparentacademy.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <TeamSection />
      <StatsSection />
      <CTASection />
    </>
  );
}