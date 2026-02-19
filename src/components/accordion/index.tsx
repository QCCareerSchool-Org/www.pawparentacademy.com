'use client';

import type { FC, ReactNode } from 'react';
import BoostrapAccordion from 'react-bootstrap/Accordion';

// import styles from './styles.module.scss';

export interface AccordionItem {
  heading: string;
  body: ReactNode;
}

interface Props {
  items: AccordionItem[];
}

export const Accordion: FC<Props> = ({ items }) => {
  return (
    <BoostrapAccordion>
      {items.map((item, index) => (
        <BoostrapAccordion.Item eventKey={index.toString()} key={item.heading} className="mb-2">
          <BoostrapAccordion.Header>{item.heading}</BoostrapAccordion.Header>
          <BoostrapAccordion.Body>{item.body}</BoostrapAccordion.Body>
        </BoostrapAccordion.Item>
      ))}
    </BoostrapAccordion>
  );
};
