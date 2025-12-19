import Image, { type StaticImageData } from 'next/image';

import styles from './styles.module.scss';

interface CourseMascotSpotlightProps {
  heading: string;
  pupName: string;
  bullets: string[];
  image: {
    src: string | StaticImageData;
    alt: string;
  };
  className?: string;
}

export default function CourseMascotSpotlight({ heading, pupName, bullets, image, className }: CourseMascotSpotlightProps) {
  const sectionClassNames = [ styles.section, className ].filter(Boolean).join(' ');

  return (
    <section className={sectionClassNames}>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className={styles.imageFrame}>
              <Image src={image.src} alt={image.alt} width={640} height={760} className="img-fluid rounded-4" />
            </div>
          </div>
          <div className={`col-lg-6 ${styles.textCol}`}>
            <h3 className="fw-bold mb-2">{heading}</h3>
            <h4 className="subtitle-teal mb-4">{pupName}</h4>
            <ul className={`${styles.list} mt-4`}>
              {bullets.map(bullet => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
