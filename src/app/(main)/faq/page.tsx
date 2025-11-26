import type { Metadata } from 'next';
import FAQHero from '@/app/(main)/faq/components/FAQHero';
import FAQSectionIntro from '@/app/(main)/faq/components/FAQSectionIntro';
import AccordionGroup from '@/components/AccordionGroup';
import CTASection from '@/components/CTASection';
import { faqSections } from '@/app/(main)/faq/faq-data';
import { faqSchema } from '@/app/(main)/faq/faq-schema';
import styles from './FaqPage.module.scss';

export const metadata: Metadata = {
  title: 'FAQ | Paw Parent Academy',
  description:
    'Find out grooming costs, the best course, and more. Learn to groom your dog at home, save money, and bond with your pet with Paw Parent Academy’s online courses.'
};

export default function FAQPage() {
  return (
    <>
      <FAQHero />

      {faqSections.map((section) => {
        const backgroundClass = section.variant === 'light' ? styles.sectionLight : '';

        return (
          <div key={section.id}>
            <FAQSectionIntro
              title={section.title}
              description={section.description}
              variant={section.variant}
            />
            <section className={`${backgroundClass} pt-2 pb-4 pb-lg-5`}>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8">
                    <AccordionGroup items={section.items} />
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      })}

      <CTASection />

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
