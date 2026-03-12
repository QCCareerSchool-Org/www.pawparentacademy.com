import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import styles from './styles.module.scss';
import type { CourseCode } from '@/domain/courseCode';
import { getEnrollmentUrl } from '@/domain/courseCode';

interface Props {
  courseCode: CourseCode;
  eyebrow?: string;
  heading: string;
  description?: string;
  backgroundImage: string | StaticImageData;
  overlayColor?: string;
}

export const CourseFinalCTA: FC<Props> = props => {
  const overlayColor = props.overlayColor ?? 'rgba(0, 0, 0, 0.8)';

  return (
    <section className={styles.ctaHero} aria-labelledby="course-final-cta-heading">
      <div className={styles.mediaWrapper}>
        <Image
          src={props.backgroundImage}
          alt="Course call-to-action background"
          fill
          sizes="100vw"
          priority={false}
          className={styles.backgroundImage}
        />
        <div className={styles.overlay} style={{ backgroundColor: overlayColor }} />
      </div>
      <div className="container position-relative py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            {props.eyebrow && <p className={`text-uppercase mb-3 ${styles.eyebrow}`}>{props.eyebrow}</p>}
            <h2 id="course-final-cta-heading" className="text-white mb-4">
              {props.heading}
            </h2>
            {props.description && <p className="text-white mb-4">{props.description}</p>}
            <Link href={getEnrollmentUrl(props.courseCode)} className="btn-pill-primary">Enroll Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
