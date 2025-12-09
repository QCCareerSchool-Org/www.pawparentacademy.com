import type { Metadata } from 'next';
import HeroSection from './HeroSection';
import FaqSection from './FaqSection';
import NailTrimCTA from './NailTrimCTA';
import ValuePropsSection from '@/app/(main)/home/ValuePropsSection';
import TestimonialsSection from '@/app/(main)/home/TestimonialsSection';
import MentorSpotlight from '@/app/(main)/home/MentorSpotlight';
import { heroContent, leadMagnetCopy, faqItems, finalCta, mentorSpotlight } from './content';
import { valueProps, testimonials } from '@/app/(main)/home/homepage-content';

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
