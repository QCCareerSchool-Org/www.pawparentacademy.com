import Image, { type StaticImageData } from 'next/image';

import styles from './styles.module.scss';

interface CourseHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  supportingPoints?: string[];
  ctaLabel: string;
  ctaHref: string;
  backgroundImage?: string | StaticImageData;
}

export default function CourseHero({
  eyebrow,
  title,
  description,
  supportingPoints,
  ctaHref,
  ctaLabel,
  backgroundImage,
}: CourseHeroProps) {
  return (
    <section className={`text-white position-relative ${styles.hero}`}>
      <div />
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Course hero background"
          fill
          priority
          className={styles.background}
          sizes="100vw"
        />
      )}

      <div className="container position-relative py-5 py-lg-5">
        <div className="row justify-content-left">
          <div className={`col-lg-8 text-left ${styles.content}`}>
            {eyebrow && <p className="text-uppercase fw-semibold small text-info mb-3">{eyebrow}</p>}
            <h1 className="mb-3 text-white">{title}</h1>
            <p className="mb-4 text-white">{description}</p>

            {supportingPoints && supportingPoints.length > 0 && (
              <ul className={`list-unstyled d-flex flex-column flex-md-row gap-3 justify-content-center mb-4 ${styles.supportList}`}>
                {supportingPoints.map(point => (
                  <li key={point} className="d-flex align-items-center gap-2">
                    <span className={styles.bullet} aria-hidden="true">
                      •
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            <a href={ctaHref} className={`btn-pill-primary ${styles.heroCta}`}>
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
