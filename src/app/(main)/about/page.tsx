import AboutHero from './AboutHeroSection';
import MissionSection from './MissionSection';
import StatsSection from './StatsSection';
import TeamSection from './TeamSection';
import CTASection from '@/components/CTASection';

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