import Image, { type StaticImageData } from 'next/image';
import type { FC } from 'react';

import styles from './styles.module.scss';

interface Props {
  pupName: string;
  bullets: string[];
  src: StaticImageData;
  alt: string;
  className?: string;
}

export const CourseMascotSpotlight: FC<Props> = props => {
  const sectionClassNames = [ styles.section, props.className ].filter(Boolean).join(' ');

  return (
    <section className={sectionClassNames}>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className={styles.imageFrame}>
              <Image src={props.src} alt={props.alt} width={640} height={760} className="img-fluid rounded-4" />
            </div>
          </div>
          <div className={`col-lg-6 ${styles.textCol}`}>
            <h3 className="fw-bold mb-2">Meet Your Course Pup Star</h3>
            <h4 className="subtitle-teal mb-4">{props.pupName}</h4>
            <ul className={`${styles.list} mt-4`}>
              {props.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
