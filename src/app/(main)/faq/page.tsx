import type { Metadata } from 'next';

import { Hero } from './_components/hero';
import { faqSectionDetails } from './data';
import type { PageComponent } from '@/app/serverComponent';
import { CTASection } from '@/components/ctaSection';
import { FAQSection } from '@/components/faqSection';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find out grooming costs, the best course, and more. Learn to groom your dog at home, save money, and bond with your pet with Paw Parent Academy\'s online courses.',
  alternates: { canonical: '/faq' },
};

const FAQPage: PageComponent = () => (
  <>
    <Hero />
    {faqSectionDetails.map((details, index) => {
      const className = index % 2 === 0 ? 'bg-light' : '';
      return <FAQSection key={details.id} id={details.id} className={className} title={details.title} text={details.description} items={details.faqItems} />;
    })}
    <CTASection />
  </>
);

export default FAQPage;
