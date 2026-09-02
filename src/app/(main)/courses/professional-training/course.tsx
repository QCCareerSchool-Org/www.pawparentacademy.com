'use client';

import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import BoostrapAccordion from 'react-bootstrap/Accordion';

export type QCPetCourseCode = 'dg' | 'dt' | 'dd';

export interface Props {
  code: QCPetCourseCode;
  title: string;
  description: ReactNode;
  right: ReactNode[];
  learn: ReactNode[];
  href: string;
}

export const Course: FC<Props> = props => (
  <>
    <BoostrapAccordion.Item eventKey={props.code} key={props.code} className="mb-2">
      <BoostrapAccordion.Header>{props.title}</BoostrapAccordion.Header>
      <BoostrapAccordion.Body>
        {props.description}
        <p><strong>This course could be right for you if you:</strong></p>
        <ul>{props.right.map((p, i) => <li key={i}>{p}</li>)}</ul>
        <p><strong>You'll learn how to:</strong></p>
        <ul>{props.learn.map((l, i) => <li key={i}>{l}</li>)}</ul>
        <Link href={props.href} className="btn btn-primary">Explore the Dog Grooming Course</Link>
      </BoostrapAccordion.Body>
    </BoostrapAccordion.Item>
  </>
);
