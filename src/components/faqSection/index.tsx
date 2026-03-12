import type { FC, ReactNode } from 'react';
import { memo, useMemo } from 'react';

import type { AccordionItem } from '../accordion';
import { Accordion } from '../accordion';
import { FAQPageJsonLD } from '@/components/jsonLd/faqPage';

export interface FAQItem {
  question: string;
  answer: ReactNode;
}

interface Props {
  id?: string;
  className?: string;
  title?: string;
  text?: string;
  items: FAQItem[];
}

export const FAQSection: FC<Props> = memo(({ id = 'faq', className, title = 'Frequently Asked Questions', text, items }) => {
  const accordionItems: AccordionItem[] = useMemo(() => {
    return items.map(f => ({ heading: f.question, body: f.answer }));
  }, [ items ]);

  return (
    <section id={id} className={className}>
      <div className="container">
        <h2 className="text-center mb-4">{title}</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            {text && <p className=" text-muted text-center mb-4">{text}</p>}
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>
      <FAQPageJsonLD items={items} />
    </section>
  );
});

FAQSection.displayName = 'FAQSection';
