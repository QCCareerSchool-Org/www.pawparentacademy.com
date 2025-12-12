import type { Metadata } from 'next';

import { faqItems, finalCta, heroContent, leadMagnetCopy, mentorSpotlight } from './content';
import FaqSection from './FaqSection';
import HeroSection from './HeroSection';
import NailTrimCTA from './NailTrimCTA';
import { testimonials, valueProps } from '@/app/(main)/home/homepage-content';
import MentorSpotlight from '@/app/(main)/home/MentorSpotlight';
import TestimonialsSection from '@/app/(main)/home/TestimonialsSection';
import ValuePropsSection from '@/app/(main)/home/ValuePropsSection';

export const metadata: Metadata = {
  title: 'Nail Trims Made Easy | Paw Parent Academy',
  description:
    'Download the free Nail Trims Pup Playbook and learn calm, step-by-step techniques to care for your dog’s paws at home.',
  alternates: {
    canonical: '/nail-trims-made-easy',
  },
};

export default function NailTrimsMadeEasyPage() {
  return (
    <>
      <HeroSection {...heroContent} formCopy={leadMagnetCopy} />
      <TestimonialsSection items={testimonials} />
      <div className="py-4" />
      <MentorSpotlight {...mentorSpotlight} />
      <div className="py-4" />
      <ValuePropsSection items={valueProps} />
      <FaqSection items={faqItems} />
      <NailTrimCTA {...finalCta} />
    </>
  );
}
