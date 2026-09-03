import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import styles from './styles.module.scss';

interface Props {
  pupName: string;
  bullets: string[];
  src: StaticImageData;
  alt: string;
  className?: string;
  new?: boolean;
}

export const CourseMascotSpotlight: FC<Props> = props => {
  const sectionClassNames = [ styles.section, props.className ].filter(Boolean).join(' ');

  return (
    <section className={`${sectionClassNames} ${props.new ? 'pb-0' : ''}`}>
      <div className="container">
        <div className="row g-4 align-items-center justify-content-center">
          <div className={`col-lg-6 ${styles.textCol} ${props.new ? 'mb-lg-s' : ''}`}>
            <h3 className="fw-bold mb-2">Meet Your Course Pup Star</h3>
            <h4 className="subtitle-teal mb-4">{props.pupName}</h4>
            <ul className={`${styles.list} mt-4`}>
              {props.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
          {props.new
            ? (
              <div className="col-sm-10 col-md-8 col-lg-6">
                <Image src={props.src} alt={props.alt} width={640} height={760} className="img-fluid" />
              </div>
            )
            : (
              <div className="col-lg-6">
                <div className={styles.imageFrame}>
                  <Image src={props.src} alt={props.alt} width={640} height={760} className="img-fluid rounded-4" />
                </div>
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
};
