'use client';

import Accordion from 'react-bootstrap/Accordion';

import styles from './styles.module.scss';

export interface AccordionItem {
  question: string;
  answerHtml: string;
}

interface AccordionGroupProps {
  items: AccordionItem[];
  className?: string;
  isFAQ?: boolean;
}

export default function AccordionGroup({ items, className, isFAQ = false }: AccordionGroupProps) {
  const wrapperClass = className ? `${styles.card} ${className}` : styles.card;
  const questionAttributes = isFAQ
    ? { itemScope: true, itemType: 'https://schema.org/Question', itemProp: 'mainEntity' }
    : undefined;
  const questionNameAttributes = isFAQ ? { itemProp: 'name' } : undefined;
  const answerAttributes = isFAQ
    ? { itemScope: true, itemType: 'https://schema.org/Answer', itemProp: 'acceptedAnswer' }
    : undefined;
  const answerTextAttributes = isFAQ ? { itemProp: 'text' } : undefined;

  return (
    <div className={wrapperClass}>
      <Accordion alwaysOpen className={styles.accordion} flush>
        {items.map((item, index) => (
          <Accordion.Item
            eventKey={String(index)}
            key={item.question}
            className={styles.item}
            {...(questionAttributes ?? {})}
          >
            <Accordion.Header>
              <span {...(questionNameAttributes ?? {})}>{item.question}</span>
            </Accordion.Header>
            <Accordion.Body>
              <div {...(answerAttributes ?? {})}>
                <div
                  {...(answerTextAttributes ?? {})}
                  dangerouslySetInnerHTML={{ __html: item.answerHtml }}
                />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
