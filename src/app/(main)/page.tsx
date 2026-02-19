import type { Metadata } from 'next';

import type { PageComponent } from '../serverComponent';
import { CourseFinderSection } from './_components/courseFinderSection';
import { HeroSection } from './_components/heroSection';
import { IntroSection } from './_components/introSection';
import { MentorSpotlight } from './_components/mentorSpotlightSection';
import { SafetySection } from './_components/safetySection';
import { TestimonialsSection } from './_components/testimonialsSection';
import { CTASection } from '@/components/ctaSectionX';
import { StatsSection } from '@/components/statsSection';
import { getServerData } from '@/lib/getServerData';

const title = 'Learn to Groom Your Dog at Home';
const description = 'Step-by-step online grooming courses that help loving paw parents save money, learn pro techniques, and bond with their pups from the comfort of home.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: { title, description, url: 'https://www.pawparentacademy.com/', type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

const HomePage: PageComponent = async props => {
  const { countryCode, provinceCode } = await getServerData(props.searchParams);
  return (
    <>
      <HeroSection />
      <IntroSection />
      <CourseFinderSection countryCode={countryCode} provinceCode={provinceCode} />
      <TestimonialsSection />
      <MentorSpotlight />
      <SafetySection />
      <StatsSection className="bg-light" />
      <CTASection />
    </>
  );
};

export default HomePage;
