import styles from './FaqSection.module.scss';
import AccordionGroup, { type AccordionItem } from '@/components/AccordionGroup';

interface FaqSectionProps {
  items: AccordionItem[];
}

export default function FaqSection({ items }: FaqSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="nail-faq-heading">
      <div className="container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <h2 id="nail-faq-heading">FAQs</h2>
            <p className="text-muted">
              Everything you need to know before you start trimming from home.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <AccordionGroup items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}
