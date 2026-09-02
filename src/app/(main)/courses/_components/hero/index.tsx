import type { StaticImageData } from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import styles from './styles.module.scss';
import { BackgroundImage } from '@/components/backgroundImage';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseName, getEnrollmentUrl } from '@/domain/courseCode';

interface Props {
  courseCode: CourseCode;
  src: StaticImageData;
  mobile?: { src: StaticImageData; breakpoint: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' };
  description: string;
  eyebrow?: string;
  supportingPoints?: string[];
  price?: string;
  inverse?: boolean;
}

export const CourseHero: FC<Props> = props => (
  <section className={props.inverse ? 'bg-light' : 'bg-dark text-white'}>
    <BackgroundImage src={props.src} mobile={props.mobile} priority />
    <div className="container">
      <div className="row g-s">
        <div className={`col-8 col-md-6 text-left ${styles.content}`}>
          {props.eyebrow && <p className="text-uppercase fw-semibold small text-info mb-3">{props.eyebrow}</p>}
          <h1 className={`mb-3 ${props.inverse ? '' : 'text-white'}`}>{getCourseName(props.courseCode)}</h1>
          <p className={`mb-4 ${props.inverse ? '' : 'text-white'}`}>{props.description}</p>
          {props.supportingPoints && props.supportingPoints.length > 0 && (
            <ul>
              {props.supportingPoints.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          )}
          <Link href={getEnrollmentUrl(props.courseCode)} className="btn btn-secondary">Enroll Now{props.price && <> ({props.price})</>}</Link>
        </div>
      </div>
    </div>
  </section>
);
