import Link from 'next/link';
import styles from './HeroSection.module.scss';
import { StaticImageData } from 'next/image';

interface HeroSectionProps {
  headline: string;
  subheading: string;
  ctaLabel: string;
  ctaHref: string;
  backgroundImage: string | StaticImageData;
}

export default function HeroSection({
  headline,
  subheading,
  ctaLabel,
  ctaHref,
  backgroundImage,
}: HeroSectionProps) {
  const backgroundUrl = typeof backgroundImage === 'string' ? backgroundImage : backgroundImage.src;
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundUrl})` }}
      aria-labelledby="home-hero-heading"
    >
      <div className={styles.overlay} aria-hidden="true" />
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-12 col-lg-9">
            <div className={styles.content}>
              <h1 id="home-hero-heading" className={styles.headline}>
                {headline}
              </h1>
              <p className={styles.subheading}>{subheading}</p>
              <div className={styles.ctaWrap}>
                <Link href={ctaHref} className={`btn-pill-primary ${styles.ctaButton}`}>
                  {ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
