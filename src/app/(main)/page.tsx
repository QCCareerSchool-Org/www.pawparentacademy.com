import type { Metadata } from 'next';
import HeroSection from './home/HeroSection';
import IntroSection from './home/IntroSection';
import ValuePropsSection from './home/ValuePropsSection';
import CourseFinderSection from './home/CourseFinderSection';
import TestimonialsSection from './home/TestimonialsSection';
import MentorSpotlight from './home/MentorSpotlight';
import SafetySection from './home/SafetySection';
import CTASection from '@/components/CTASection';
import StatsSection from './about/StatsSection';
import {
  heroContent,
  introContent,
  valueProps,
  courseFinderContent,
  testimonials,
  mentorSpotlight,
  safetyFeatures,
} from './home/homepage-content';

export const metadata: Metadata = {
  title: 'Paw Parent Academy | Learn to Groom Your Dog at Home',
  description:
    'Step-by-step online grooming courses that help loving paw parents save money, learn pro techniques, and bond with their pups from the comfort of home.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Paw Parent Academy | Learn to Groom Your Dog at Home',
    description:
      'Step-by-step online grooming courses that help loving paw parents save money, learn pro techniques, and bond with their pups.',
    url: 'https://www.pawparentacademy.com/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paw Parent Academy | Learn to Groom Your Dog at Home',
    description:
      'Save on grooming bills and learn pro techniques through coat-specific courses taught by an award-winning instructor.',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection {...heroContent} />
      <IntroSection {...introContent} />
      <ValuePropsSection items={valueProps} />
      <CourseFinderSection {...courseFinderContent} />
      <TestimonialsSection items={testimonials} />
      <MentorSpotlight {...mentorSpotlight} />
      <SafetySection features={safetyFeatures} />
      <StatsSection className="bg-light" />
      <CTASection />
    </>
  );
}
