import type { StaticImageData } from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import styles from './styles.module.scss';
import { BackgroundImage } from '@/components/backgroundImage';
import { Overlay } from '@/components/overlay';
import type { CourseCode } from '@/domain/courseCode';
import { getEnrollmentUrl } from '@/domain/courseCode';

interface Props {
  courseCode: CourseCode;
  eyebrow?: string;
  heading: string;
  description?: string;
  backgroundImage: StaticImageData;
  overlayColor?: string;
}

export const CourseFinalCTA: FC<Props> = props => {
  const overlayColor = props.overlayColor ?? 'rgba(0, 0, 0, 0.8)';
  return (
    <section className={styles.ctaHero}>
      <BackgroundImage src={props.backgroundImage} />
      <Overlay background={overlayColor} />
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <div className="my-s">
              {props.eyebrow && <p className={`text-uppercase mb-2 ${styles.eyebrow}`}>{props.eyebrow}</p>}
              <h2 className="text-white mb-3">{props.heading}</h2>
              {props.description && <p className="text-white mb-4">{props.description}</p>}
              <Link href={getEnrollmentUrl(props.courseCode)} className="btn btn-primary">Enroll Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
