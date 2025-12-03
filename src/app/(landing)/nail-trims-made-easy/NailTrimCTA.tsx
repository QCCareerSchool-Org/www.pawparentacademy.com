import Link from 'next/link';
import styles from './NailTrimCTA.module.scss';

interface NailTrimCTAProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function NailTrimCTA({ title, description, ctaLabel, ctaHref }: NailTrimCTAProps) {
  return (
    <section className={styles.cta} aria-labelledby="nail-trim-cta">
      <div className={styles.inner}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 id="nail-trim-cta" className="text-white mb-3">
                {title}
              </h2>
              <p className="text-white mb-4">{description}</p>
              <Link href={ctaHref} className="btn-pill-primary">
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
