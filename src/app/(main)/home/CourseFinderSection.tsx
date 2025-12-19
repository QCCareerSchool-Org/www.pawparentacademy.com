import Image from 'next/image';
import Link from 'next/link';

import styles from './CourseFinderSection.module.scss';

interface HighlightProps {
  badge: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryLinkLabel: string;
  secondaryLinkHref: string;
}

interface CourseFinderSectionProps {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  highlight: HighlightProps;
}

export default function CourseFinderSection({
  title,
  subtitle,
  description,
  bullets,
  ctaLabel,
  ctaHref,
  highlight,
}: CourseFinderSectionProps) {
  return (
    <section className={`${styles.section} bg-light`} aria-labelledby="course-finder-heading">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-lg-7">
            <article className={styles.contentCard}>
              <h2 id="course-finder-heading" className="mb-2">
                {title}
              </h2>
              <h3 className="h4 mb-3 text-dark">{subtitle}</h3>
              <p>{description}</p>
              <ul className={styles.bullets}>
                {bullets.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="fw-semibold mb-3">Choose the right course for your pup!</p>
              <Link href={ctaHref} className={`btn-pill-pink ${styles.ctaButton}`}>
                {ctaLabel}
              </Link>
            </article>
          </div>
          <div className="col-12 col-lg-5">
            <article className={styles.highlightCard}>
              <span className={styles.badge}>{highlight.badge}</span>
              <div className={styles.imageFrame}>
                <Image
                  src={highlight.image}
                  alt={highlight.imageAlt}
                  width={600}
                  height={600}
                  className="w-100 h-auto"
                />
              </div>
              <h3 className="h3">{highlight.title}</h3>
              <p>{highlight.description}</p>
              <p className="mb-3">
                <Link href={highlight.secondaryLinkHref} className={styles.link}>
                  {highlight.secondaryLinkLabel}
                </Link>
              </p>
              <a href={highlight.primaryCtaHref} className="btn-pill-primary w-100 justify-content-center">
                {highlight.primaryCtaLabel}
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
