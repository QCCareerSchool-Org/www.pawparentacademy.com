'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import BoostrapAccordion from 'react-bootstrap/Accordion';

import styles from './course.module.css';

export type QCPetCourseCode = 'dg' | 'dt' | 'dd';

export interface Props {
  code: QCPetCourseCode;
  title: string;
  description: ReactNode;
  reasons: ReactNode[];
  topics: ReactNode[];
  href: string;
  imageSrc: StaticImageData;
}

export const Course: FC<Props> = props => (
  <>
    <BoostrapAccordion.Item eventKey={props.code} key={props.code} className="mb-2">
      <BoostrapAccordion.Header><h3 className="text-black h4 mb-0" style={{ fontWeight: 800 }}>{props.title}</h3></BoostrapAccordion.Header>
      <BoostrapAccordion.Body>
        <div className="row mb-4 g-4">
          <div className="col-md-6">
            {props.description}
            <Link href={props.href} className="btn btn-secondary">Explore the Dog Grooming Course</Link>
          </div>
          <div className="col-md-6">
            <Image src={props.imageSrc} className="img-fluid rounded-4" alt="" />
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-6">
            <h4 className="h5" style={{ color: 'var(--brand-pink)' }}><strong>This course could be right for you if you:</strong></h4>
            <ul className={`${styles.list} ${styles.hearts}`}>{props.reasons.map((r, i) => <li key={i}>{r}</li>)}</ul>
          </div>
          <div className="col-md-6">
            <h4 className="h5" style={{ color: 'var(--brand-pink)' }}><strong>You'll learn how to:</strong></h4>
            <ul className={`${styles.list} ${styles.stars}`}>{props.topics.map((t, i) => <li key={i}>{t}</li>)}</ul>
          </div>
        </div>
      </BoostrapAccordion.Body>
    </BoostrapAccordion.Item>
  </>
);
