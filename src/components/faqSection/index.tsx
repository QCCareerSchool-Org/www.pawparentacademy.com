import type { FC, ReactNode } from 'react';

import type { AccordionItem } from '../accordionX';
import { Accordion } from '../accordionX';

export interface FAQItem {
  question: string;
  answer: ReactNode;
}

interface Props {
  id: string;
  className?: string;
  title: string;
  text?: string;
  faqItems: FAQItem[];
}

export const FAQSection: FC<Props> = props => {
  const accordionItems: AccordionItem[] = props.faqItems.map(f => ({ heading: f.question, body: f.answer }));

  return (
    <section key={props.id} id={props.id} className={props.className}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <h3 className="text-center">{props.title}</h3>
            {props.text && <p className="mt-2 mb-4 text-muted text-center">{props.text}</p>}
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>
    </section>
  );
};
