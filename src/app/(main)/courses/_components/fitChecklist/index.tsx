import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import styles from './styles.module.scss';

interface Props {
  heading?: string;
  checklist: string[];
  src: StaticImageData;
  alt: string;
  className?: string;
}

export const CourseFitChecklist: FC<Props> = props => {
  const sectionClassNames = [ styles.section, props.className ].filter(Boolean).join(' ');

  return (
    <section className={sectionClassNames}>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6 order-lg-1">
            <div className={styles.imageWrapper}>
              <Image src={props.src} alt={props.alt} width={640} height={760} className="img-fluid rounded-4" />
            </div>
          </div>
          <div className={`col-lg-6 order-lg-2 ${styles.textCol}`}>
            <h3 className="fw-bold mb-4">{props.heading ?? 'Are We Barking Up the Right Tree?'}</h3>
            <ul className={styles.list}>
              {props.checklist.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
