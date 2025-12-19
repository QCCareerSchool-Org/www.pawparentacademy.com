import styles from './styles.module.scss';

interface FAQSectionIntroProps {
  title: string;
  description?: string;
  variant?: 'light' | 'default';
}

export default function FAQSectionIntro({ title, description, variant = 'default' }: FAQSectionIntroProps) {
  const sectionClass = variant === 'light' ? `${styles.intro} ${styles.light}` : styles.intro;
  const headingId = `${title.replace(/\s+/gu, '-').toLowerCase()}-heading`;

  return (
    <section className={sectionClass} aria-labelledby={headingId}>
      <div className="container">
        <div className="row justify-content-center">
          <div className={`col-12 col-lg-8 ${styles.copy}`}>
            <h3 className="fw-bold mb-2" id={headingId}>
              {title}
            </h3>
            {description && <p className="mb-0 text-muted">{description}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
