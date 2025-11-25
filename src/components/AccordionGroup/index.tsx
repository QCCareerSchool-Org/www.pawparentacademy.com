"use client";

import Accordion from 'react-bootstrap/Accordion';
import styles from './styles.module.scss';

export interface AccordionItem {
  question: string;
  answerHtml: string;
}

interface AccordionGroupProps {
  items: AccordionItem[];
  className?: string;
}

export default function AccordionGroup({ items, className }: AccordionGroupProps) {
  const wrapperClass = className ? `${styles.card} ${className}` : styles.card;

  return (
    <div className={wrapperClass}>
      <Accordion alwaysOpen={false} className={styles.accordion} flush>
        {items.map((item, index) => (
          <Accordion.Item eventKey={String(index)} key={item.question} className={styles.item}>
            <Accordion.Header>{item.question}</Accordion.Header>
            <Accordion.Body
              dangerouslySetInnerHTML={{ __html: item.answerHtml }}
              className="pt-3"
            />
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
