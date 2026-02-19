import type { Metadata } from 'next';

import { Hero } from './_components/hero';
import { categories } from './data';
import { Schema } from './schema';
import type { PageComponent } from '@/app/serverComponent';
import { Accordion } from '@/components/accordionX';
import { CTASection } from '@/components/ctaSectionX';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find out grooming costs, the best course, and more. Learn to groom your dog at home, save money, and bond with your pet with Paw Parent Academy\'s online courses.',
  alternates: { canonical: '/faq' },
};

const FAQPage: PageComponent = () => (
  <>
    <Hero />
    {categories.map((section, index) => {
      const className = index % 2 === 0 ? 'bg-light' : '';
      return (
        <section key={section.id} id={section.id} className={className}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <h3 className="text-center">{section.title}</h3>
                {section.description && <p className="mt-2 mb-4 text-muted text-center">{section.description}</p>}
                <Accordion items={section.items} />
              </div>
            </div>
          </div>
        </section>
      );
    })}
    <CTASection />
    <Schema />
  </>
);

export default FAQPage;
