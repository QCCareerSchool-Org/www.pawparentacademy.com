import AccordionGroup, { AccordionItem } from '@/components/AccordionGroup';
import styles from './styles.module.scss';

interface CourseFAQProps {
  heading: string;
  items: AccordionItem[];
}

export default function CourseFAQ({ heading, items }: CourseFAQProps) {
  return (
    <section className={`py-5 bg-light ${styles.section}`}>
      <div className="container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-6">
            <h2 className='mt-5'>{heading}</h2>
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
