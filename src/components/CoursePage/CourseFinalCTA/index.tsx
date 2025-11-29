import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import styles from './styles.module.scss';

interface CourseFinalCTAProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  backgroundImage: string | StaticImageData;
  overlayColor?: string;
}

export default function CourseFinalCTA({
  eyebrow,
  heading,
  description,
  ctaHref,
  ctaLabel,
  backgroundImage,
  overlayColor = 'rgba(0, 0, 0, 0.8)',
}: CourseFinalCTAProps) {
  return (
    <section className={styles.ctaHero} aria-labelledby="course-final-cta-heading">
      <div className={styles.mediaWrapper}>
        <Image
          src={backgroundImage}
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
            {eyebrow && <p className={`text-uppercase mb-3 ${styles.eyebrow}`}>{eyebrow}</p>}
            <h2 id="course-final-cta-heading" className="text-white mb-4">
              {heading}
            </h2>
            {description && <p className="text-white mb-4">{description}</p>}
            <a href={ctaHref} className="btn-pill-primary">
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
