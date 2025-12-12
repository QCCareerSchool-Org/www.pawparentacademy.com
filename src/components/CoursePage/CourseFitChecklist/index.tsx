import Image, { type StaticImageData } from 'next/image';

import styles from './styles.module.scss';

interface CourseFitChecklistProps {
  heading: string;
  checklist: string[];
  image: {
    src: string | StaticImageData;
    alt: string;
  };
  className?: string;
}

export default function CourseFitChecklist({ heading, checklist, image, className }: CourseFitChecklistProps) {
  const sectionClassNames = [ styles.section, className ].filter(Boolean).join(' ');

  return (
    <section className={sectionClassNames}>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6 order-lg-1">
            <div className={styles.imageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                width={640}
                height={760}
                className="img-fluid rounded-4"
              />
            </div>
          </div>
          <div className={`col-lg-6 order-lg-2 ${styles.textCol}`}>
            <h3 className="fw-bold mb-4">{heading}</h3>
            <ul className={styles.list}>
              {checklist.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
