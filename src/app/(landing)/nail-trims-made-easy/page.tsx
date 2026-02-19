import type { Metadata } from 'next';

import { CTASection } from './_components/ctaSection';
import { HeroSection } from './_components/heroSection';
import { MentorSpotlight } from '@/app/(main)/_components/mentorSpotlightSection';
import { TestimonialsSection } from '@/app/(main)/_components/testimonialsSection';
import type { FAQItem } from '@/components/faqSection';
import { FAQSection } from '@/components/faqSection';
import { ValueProps } from '@/components/valueProps';

export const metadata: Metadata = {
  title: 'Nail Trims Made Easy',
  description: 'Download the free Nail Trims Pup Playbook and learn calm, step-by-step techniques to care for your dog\'s paws at home.',
  alternates: { canonical: '/nail-trims-made-easy' },
};

export default function NailTrimsMadeEasyPage() {
  return (
    <>
      <HeroSection />
      <TestimonialsSection />
      <MentorSpotlight />
      <section>
        <div className="container">
          <ValueProps />
        </div>
      </section>
      <FAQSection id="faq" className="bg-light" title="FAQs" text="Everything you need to know before you start trimming from home." faqItems={faqItems} />
      <CTASection />
    </>
  );
}

const faqItems: FAQItem[] = [
  {
    question: 'Do I need any prior experience?',
    answer: 'With the right reward, positive reinforcement works for every dog.',
  },
  {
    question: 'What tools will I need for the course?',
    answer: "We provide a comprehensive list of tools you'll need. Don't worry, we've made sure to include common household items and affordable grooming tools.",
  },
  {
    question: 'Can I access the course on multiple devices?',
    answer: 'Yes, you can. Our course is accessible on any device, be it a computer, tablet, or smartphone. You can learn at your own pace, wherever you are.',
  },
];
