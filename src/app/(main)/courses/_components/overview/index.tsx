import type { StaticImageData } from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import { CourseOverviewCarousel } from './carousel';
import styles from './styles.module.scss';
import { type CourseCode, getEnrollmentUrl } from '@/domain/courseCode';

export interface CourseModuleInfo {
  title: string;
  subtitle: string;
  description: string;
  image: string | StaticImageData;
}

interface Props {
  heading: string;
  body: string;
  className?: string;
  courseCode: CourseCode;
  modules: CourseModuleInfo[];
  price?: string;
}

export const CourseOverview: FC<Props> = props => {
  const sectionClass = [ styles.section, props.className ].filter(Boolean).join(' ');

  return (
    <section className={sectionClass}>
      <div className="container">
        <div className={`text-center ${styles.content}`}>
          <h2 className="mb-3">{props.heading}</h2>
          <p className="text-muted mb-0">{props.body}</p>
        </div>
        <CourseOverviewCarousel modules={props.modules} />
        <div className={styles.ctaWrap}>
          <Link className="btn btn-secondary btn-lg" href={getEnrollmentUrl(props.courseCode)}>Enroll Now{props.price && <> ({props.price})</>}</Link>
        </div>
      </div>
    </section>
  );
};
